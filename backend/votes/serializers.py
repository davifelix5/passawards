from rest_framework import serializers
from drf_recaptcha.fields import ReCaptchaV2Field

from . import models
from . import validators

class FilterSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.CategoryType
        fields = '__all__'


class ContestantSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Contestant
        fields = ['id', 'name', 'description', 'image']


class CategorySerializer(serializers.ModelSerializer):
    contestants = ContestantSerializer(many=True, read_only=True)
    category_type = serializers.PrimaryKeyRelatedField(
        read_only=True, )

    class Meta:
        model = models.Category
        fields = ['id', 'name', 'description',
                  'video', 'category_type', 'contestants']


class CategoryCreateSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Category
        fields = '__all__'


class ContestantResultSerializer(ContestantSerializer):
    votes = serializers.SerializerMethodField()

    class Meta:
        model = models.Contestant
        fields = ['id', 'name', 'image', 'votes']

    def get_votes(self, contestant):
        return models.Vote.objects.filter(contestant=contestant).count()


class CategoryResultSerializer(CategorySerializer):
    contestants = ContestantResultSerializer(many=True, read_only=True)


class VoteSerializer(serializers.ModelSerializer):
    recaptcha = ReCaptchaV2Field()

    class Meta:
        model = models.Vote
        fields = ['category', 'contestant', 'recaptcha']

    def validate(self, attrs):
        valid = validators.validate_vote(attrs['contestant'], attrs['category'])
        if not valid:
            raise serializers.ValidationError({
                'contestant': 'Esse participante não está registrado na categoria'
            })
        attrs.pop('recaptcha')
        return attrs

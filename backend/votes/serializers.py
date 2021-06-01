from rest_framework import serializers
from . import models


class FilterSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.CategoryType
        fields = '__all__'


class ContestantSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Contestant
        fields = ['id', 'name', 'image']


class CategorySerializer(serializers.ModelSerializer):
    contestants = ContestantSerializer(many=True, read_only=True)
    category_type = serializers.SlugRelatedField(
        read_only=True, slug_field='name')

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

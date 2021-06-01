from rest_framework import serializers
from . import models

class FilterSerializer(serializers.ModelSerializer):
    class Meta:
      model = models.CategoryType
      fields = '__all__'


class ContestantSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Contestant
        fields = ['name', 'image']


class CategorySerializer(serializers.ModelSerializer):
    contestants = ContestantSerializer(many=True, read_only=True)
    category_type = serializers.SlugRelatedField(read_only=True, slug_field='name')
    class Meta:
        model = models.Category
        fields = ['id', 'name', 'description', 'video', 'category_type', 'contestants']

class CategoryCreateSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Category
        fields = '__all__'

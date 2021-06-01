from rest_framework.viewsets import ModelViewSet

from . import models
from . import serializers

class FilterViewset(ModelViewSet):
    model = models.CategoryType
    queryset = models.CategoryType.objects.all()
    serializer_class = serializers.FilterSerializer


class CategoryViewset(ModelViewSet):
    model = models.Category
    queryset = models.Category.objects.all()

    def get_serializer_class(self):
        if self.request.method == 'GET':
            return serializers.CategorySerializer
        return serializers.CategoryCreateSerializer

from rest_framework.viewsets import ModelViewSet
from rest_framework.response import Response
from django.http import Http404
from rest_framework.decorators import action
from django.shortcuts import get_object_or_404

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

    def get_queryset(self):
        queryset = models.Category.objects.all()
        category_type = self.request.query_params.get('filter')
        try:
            return queryset.filter(category_type__id=int(category_type))
        except TypeError:  # When filter is None
            return queryset
        except ValueError:  # When filter cannot be casted to int
            return []

    @action(detail=True)
    def results(self, request, pk=None):
        if not pk.isdigit():
            raise Http404
        category = get_object_or_404(models.Category, pk=pk)
        result = serializers.CategoryResultSerializer(category).data
        result['contestants'] = sorted(
            result['contestants'], key=lambda c: c['votes'], reverse=True)
        return Response(result)

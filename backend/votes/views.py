from django.http import Http404
from django.shortcuts import get_object_or_404, render
from rest_framework import status, viewsets
from rest_framework.viewsets import ModelViewSet
from rest_framework.response import Response
from rest_framework.decorators import action
from rest_framework.mixins import CreateModelMixin
from rest_framework.permissions import IsAuthenticated

from django.conf import settings

from . import models
from . import serializers


class FilterViewset(ModelViewSet):
    model = models.CategoryType
    queryset = models.CategoryType.objects.all()
    serializer_class = serializers.FilterSerializer


class CategoryViewset(ModelViewSet):
    model = models.Category
    queryset = models.Category.objects.all().order_by('id')

    def get_serializer_class(self):
        if self.action == 'vote':
            return serializers.VoteSerializer
        elif self.request.method == 'POST':
            return serializers.CategoryCreateSerializer
        return serializers.CategorySerializer

    def get_queryset(self):
        queryset = models.Category.objects.all().order_by('id')
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


class VoteViewSet(CreateModelMixin, viewsets.GenericViewSet):
    permission_classes = [IsAuthenticated]
    model = models.Vote
    queryset = models.Vote.objects.all()
    serializer_class = serializers.VoteSerializer

    def create(self, request, *args, **kwargs):
        super().create(request, *args, **kwargs)
        return Response({'response': 'Vote registrado com sucesso'}, status=status.HTTP_201_CREATED)

def recaptcha(request):
    if request.method == 'POST':
        print(request.POST)
    return render(request, 'recaptcha.html', {
        'site_key': settings.CAPTCHA_CLIENT_KEY
    })

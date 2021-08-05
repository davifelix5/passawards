from django.http import Http404
from django.shortcuts import get_object_or_404, render
from rest_framework import status, viewsets
from rest_framework.viewsets import ModelViewSet
from rest_framework.response import Response
from rest_framework.decorators import action
from rest_framework.mixins import CreateModelMixin
from rest_framework.permissions import IsAuthenticated

from django_filters.rest_framework import DjangoFilterBackend
from rest_framework.filters import SearchFilter

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
    filter_backends = [DjangoFilterBackend, SearchFilter]
    filter_fields = {
        'category_type': ["in", "exact"],
    }
    search_fields = ['name', 'description']

    def get_serializer_class(self):
        if self.action == 'vote':
            return serializers.VoteSerializer
        elif self.request.method == 'POST':
            return serializers.CategoryCreateSerializer
        return serializers.CategorySerializer

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

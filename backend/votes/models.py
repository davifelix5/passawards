from __future__ import annotations
from django.core.exceptions import ValidationError
from django.db import models
from . import utils, validators
from ckeditor.fields import RichTextField
# from gdstorage.storage import GoogleDriveStorage

# gd_storage = GoogleDriveStorage()


class CategoryType(models.Model):
    name = models.CharField(max_length=100, verbose_name='Modalidade')

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = 'Tipo de categoria'


class Category(models.Model):
    name = models.CharField(max_length=100, verbose_name='Nome da categoria')
    description = RichTextField(verbose_name='Descrição')
    video = models.FileField(upload_to=utils.upload_video,
                             verbose_name='Vídeo da cateogoria')
    category_type = models.ForeignKey(CategoryType, on_delete=models.CASCADE, verbose_name='Tipo')

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = 'Categoria'


class Contestant(models.Model):
    name = models.CharField(max_length=100, verbose_name='Nome do candidato')
    image = models.ImageField(
        upload_to=utils.upload_image, verbose_name='Foto do participante')
    category = models.ForeignKey(
        Category, on_delete=models.CASCADE, related_name='contestants', verbose_name='Categoria')
    votes = models.ManyToManyField('Category', through='Vote')

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = 'Participante'
        verbose_name_plural = 'Participantes'


class Vote(models.Model):
    contestant = models.ForeignKey(Contestant, on_delete=models.CASCADE, verbose_name='Participante')
    category = models.ForeignKey(Category, on_delete=models.CASCADE, verbose_name='Cateoria')
    timestamp = models.DateTimeField(auto_now=True, verbose_name='Data de voto')

    def __str__(self):
        return f'{self.contestant.name} / {self.category.name}'

    def full_clean(self, exclude, validate_unique):
        valid = validators.validate_vote(self.contestant, self.category)
        if not valid:
            raise ValidationError(f'{self.contestant} não está na categoria {self.category}')
        return super().full_clean(exclude=exclude, validate_unique=validate_unique)

    class Meta:
        verbose_name = 'Voto'

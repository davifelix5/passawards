from django.contrib import admin
from . import models


class CategoryAdmin(admin.ModelAdmin):
    model = models.Category


class CategoryTypeAdmin(admin.ModelAdmin):
    model = models.CategoryType


class ContestantAdmin(admin.ModelAdmin):
    model = models.Contestant


class VoteAdmin(admin.ModelAdmin):
    model = models.Vote

admin.site.register(models.CategoryType, CategoryTypeAdmin)
admin.site.register(models.Category, CategoryAdmin)
admin.site.register(models.Contestant, ContestantAdmin)
admin.site.register(models.Vote, VoteAdmin)
from django.contrib import admin
from django.db.models import Count
from django.contrib.auth.models import User, Group
from . import models
from django.utils.translation import gettext_lazy as _


class CategoryAdmin(admin.ModelAdmin):
    model = models.Category
    list_display = ['id', 'name', 'category_type']


class CategoryTypeAdmin(admin.ModelAdmin):
    model = models.CategoryType


class ContestantAdmin(admin.ModelAdmin):
    model = models.Contestant
    list_display = ['name', 'category', 'count_votes']
    list_filter = ['category']

    def count_votes(self, obj):
        return obj.count_votes()

    def get_queryset(self, request):
        qs = super().get_queryset(request)
        qs = qs.annotate(_count_votes=Count('votes')).order_by('-_count_votes')
        return qs

    @admin.display(description='Votos')
    def count_votes(self, obj):
        return obj._count_votes


class VoteAdmin(admin.ModelAdmin):
    model = models.Vote
    list_filter = ['category']
    list_display = ['contestant', 'category', 'timestamp']


admin.site.register(models.CategoryType, CategoryTypeAdmin)
admin.site.register(models.Category, CategoryAdmin)
admin.site.register(models.Contestant, ContestantAdmin)
admin.site.register(models.Vote, VoteAdmin)

admin.site.unregister(Group)

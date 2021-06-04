from django.core.exceptions import ValidationError
from django.utils.translation import gettext_lazy as _
from . import models


def validate_vote(contestant, category):
    try:
        models.Contestant.objects.get(pk=contestant.pk, category=category)
        return True
    except models.Contestant.DoesNotExist:
        return False

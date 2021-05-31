from django.core.exceptions import ValidationError
from django.utils.translation import gettext_lazy as _
from . import models


def validate_vote(contestant, category):
    try:
        models.Contestant.objects.get(pk=contestant.pk, category=category)
    except models.Contestant.DoesNotExist:
        raise ValidationError(
            _('"%(contestant)s" não está na categoria "%(category)s"'),
            params={'contestant': contestant, 'category': category},
        )
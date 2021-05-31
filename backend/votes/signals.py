from django.dispatch import receiver
from django.db import models

@receiver(models.signals.post_delete)
def delete_file_when_instance_removed(sender, instance, **kwargs):
    for field in sender._meta.concrete_fields:
        if isinstance(field,models.FileField):
            field_file = getattr(instance, field.name) 
            field_file.delete(save=False)

@receiver(models.signals.pre_save)
def delete_file_when_updated(sender, instance, **kwargs):

    if not instance.pk:
        return

    for field in sender._meta.concrete_fields:
        if isinstance(field,models.FileField):
            try:
                old_instante = sender.objects.get(pk=instance.pk)
            except sender.DoesNotExist:
                return
            old_instance_field_file = getattr(old_instante,field.name)
            intance_field_file = getattr(instance,field.name)
            if old_instance_field_file.name != intance_field_file.name:
                old_instance_field_file.delete(save=False)

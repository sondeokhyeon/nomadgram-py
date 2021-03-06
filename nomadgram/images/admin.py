from django.contrib import admin
from . import models
# Register your models here.


@admin.register(models.Image)
class ImageAdmin(admin.ModelAdmin):

    list_display_links = (
        'location',
        'caption'
    )

    search_fields = (
        'location',
        'caption',
    )

    list_filter = (
        'location',
        'creator'
    )

    list_display = (
        'id',
        'creator',
        'location',
        'caption',
        'file',
        'created_at',
        'updated_at',
    )


@admin.register(models.Like)
class LikeAdmin(admin.ModelAdmin):
    list_display = (
        'creator',
        'image',
    )


@admin.register(models.Comment)
class CommentAdmin(admin.ModelAdmin):
    list_display = (
        'id',
        'message',
        'creator',
        'image',
        'created_at',
        'updated_at',
    )

from rest_framework import serializers
from . import models
from nomadgram.images import serializers as images_serializers
from nomadgram.users import serializers as user_serialiers


class NotificationsSerializer(serializers.ModelSerializer):

    creator = user_serialiers.ListUserSerialzer()
    image = images_serializers.SmallImageSerializer()

    class Meta:
        model = models.Notification
        fields = '__all__'

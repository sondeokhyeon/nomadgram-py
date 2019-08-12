from django.apps import AppConfig
from django.utils.translation import gettext_lazy as _


class UsersConfig(AppConfig):
    name = "nomadgram.users"
    verbose_name = _("Users")

    def ready(self):
        """Override this to put in:
            Users system checks
            Users signal registration
        """

        from .signals import user_signed_up

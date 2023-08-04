from django.db import models


# Create your models here.

class Projectimage(models.Model):
    prj_images = models.ImageField(upload_to='project_image')
    prj_name = models.TextField(max_length=100)
    prj_para = models.TextField(max_length=100, blank=True, null=True)

    def __str__(self):
        return self.prj_name


class ContactMessage(models.Model):
    name = models.CharField(max_length=100)
    phonenumber = models.CharField(max_length=15)
    email = models.EmailField()
    message = models.TextField()

    def __str__(self):
        return self.name

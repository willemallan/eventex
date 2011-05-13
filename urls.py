from django.conf.urls.defaults import patterns
from home.views import homepage

urlpatterns = patterns('', 
	(r'^$', homepage),
)
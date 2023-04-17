from rest_framework.response import Response
from rest_framework import status
from rest_framework.views import APIView
from rest_framework import viewsets
from home.models import Member
from django.contrib.auth import authenticate
from rest_framework.permissions import IsAuthenticated
from home.serializers import MemberRegistrationSerializer, MemberLoginSerializer, MemberProfileViewSerializer
from home.renderers import MemberRenderer
from rest_framework_simplejwt.tokens import RefreshToken

# points = ["one", "two", "three"]

# # Create your views here.
# def index(request):
#     return HttpResponse("Hello")

# def login(request):
#     return render(request, "home/login.html")

# def register(request):
#     return render(request, "home/register.html", {
#         "points" : points,
#     })

# class MemberViewSet(viewsets.ModelViewSet):

#     permission_classes = (IsAuthenticated,)
#     serializer_class = MemberRegistrationSerializer
#     queryset = get_user_model().objects.all() #Member.objects.all()

def get_tokens_for_user(user):
    refresh = RefreshToken.for_user(user)

    return {
        'refresh': str(refresh),
        'access': str(refresh.access_token),
    }


class MemberRegistrationView(APIView):
    renderer_classes = [MemberRenderer]
    
    def post(self, request, format=None):
        print(request.data)
        serializer = MemberRegistrationSerializer(data=request.data)
        if serializer.is_valid():
            user = serializer.save()
            token = get_tokens_for_user(user)
            return Response({'token': token, 'msg':'Registration Success'}, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    

class MemberLoginView(APIView):
    renderer_classes = [MemberRenderer]
    
    def post(self, request, format=None):
        serializer = MemberLoginSerializer(data=request.data)
        # print(request.data)
        if serializer.is_valid():
            email = serializer.data.get('email')
            password = serializer.data.get('password')
            member = authenticate(email=email, password=password)
            if member is not None:
                token = get_tokens_for_user(member)
                return Response({'token':token, 'msg':'Login Success'}, status=status.HTTP_200_OK)
            else:
                return Response({'errors':{'non_field_errors':['Email or passowrd is not valid']}}, status=status.HTTP_404_NOT_FOUND)
            
class MemberProfileView(APIView):
    renderer_classes = [MemberRenderer]
    permission_classes = [IsAuthenticated]
    
    def get(self, request, format=None):
        serializer = MemberProfileViewSerializer(request.user)
        return Response(serializer.data, status=status.HTTP_200_OK)

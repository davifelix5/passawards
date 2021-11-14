from rest_framework.pagination import PageNumberPagination
from rest_framework.response import Response

class CustomPaginator(PageNumberPagination):
    page_size = 10
    def get_paginated_response(self, data):
        return Response({
            'count': self.page.paginator.count,
            'page_count': self.page.paginator.num_pages,
            'page_size': self.page_size,
            'current_page': self.page.number,
            'results': data,
        })

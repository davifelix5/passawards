import random
import os.path


def upload_video(category, filename):
    category_name = category.name.lower().replace(' ', '_')
    _, file_ext = os.path.splitext(filename)
    file_hash = random.getrandbits(32)
    return f'categories/{category_name}_{file_hash}{file_ext}'


def upload_image(contestant, filename):
    contestant_name = contestant.name.replace(' ', '_')
    file_hash = random.getrandbits(32)
    _, file_ext = os.path.splitext(filename)
    return f'contestants/{file_hash}_{contestant_name}{file_ext}'

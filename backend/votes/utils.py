def upload_video(category, filename):
    import random
    category_name = category.name.lower().replace(' ', '_')
    file_hash = random.getrandbits(64)
    return f'categories/{category_name}/{file_hash}_{filename}'


def upload_image(contestant, filename):
    import random
    import os.path
    contestant_name = contestant.name.replace(' ', '_')
    file_hash = random.getrandbits(64)
    _, file_ext = os.path.splitext(filename)
    return f'contestants/{file_hash}_{contestant_name}{file_ext}'
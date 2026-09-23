---
layout: default
permalink: /blog/
title: life
nav: true
nav_order: 99
photos: []
---

<div class="post st-life">
  <header class="post-header">
    <h1 class="post-title">Life</h1>
    <p class="post-description">Photography, travels, and everyday moments.</p>
  </header>
  {% if page.photos.size > 0 %}
  <div class="st-photo-grid">
    {% for photo in page.photos %}
    <figure>
      <img src="{{ photo.src | relative_url }}" alt="{{ photo.alt | escape }}" loading="lazy">
      {% if photo.caption %}<figcaption>{{ photo.caption | escape }}</figcaption>{% endif %}
    </figure>
    {% endfor %}
  </div>
  {% endif %}
</div>

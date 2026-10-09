---
layout: default
permalink: /blog/
title: life
nav: true
nav_order: 99
photos:
  - src: /assets/img/life/puerto-rico-2025-11.jpg
    place: "Puerto Rico"
    date: November 2025
    caption: "Skydiving at 14,000 ft"
    alt: "Skydiving above Puerto Rico"
    width: 1920
    height: 1080
    composition: opening
  - src: /assets/img/life/new-york-2026-08.jpg
    place: "New York City"
    date: August 2026
    caption: "View from the Empire State Building"
    alt: "Manhattan skyline and harbor beneath a pink sunset"
    width: 2568
    height: 1926
    composition: landscape
  - src: /assets/img/life/portland-2026-08.jpg
    place: "Portland"
    date: August 2026
    caption: ""
    alt: "Sailboats and a white wooden pier on blue water"
    width: 1920
    height: 2560
    composition: left
  - src: /assets/img/life/yellowstone-falls-2026-05.jpg
    place: "Yellowstone"
    date: May 2026
    caption: ""
    alt: "Looking toward a waterfall in Yellowstone Canyon"
    width: 1440
    height: 1920
    composition: right
  - src: /assets/img/life/yellowstone-canyon-2026-05.jpg
    place: "Yellowstone"
    date: May 2026
    caption: ""
    alt: "A river winding between golden canyon walls"
    width: 1440
    height: 2160
    composition: narrow
  - src: /assets/img/life/shanghai-debate-2026-02.jpg
    place: "Shanghai, China"
    date: February 2026
    caption: "Debate memories"
    alt: "Two instant photographs from a debate event"
    width: 1444
    height: 1444
    composition: square
  - src: /assets/img/life/istanbul-2026-01.jpg
    place: "Istanbul, Türkiye"
    date: January 2026
    caption: ""
    alt: "Seabirds above the water and a boat in Istanbul"
    width: 400
    height: 300
    composition: small
  - src: /assets/img/life/singapore-debate-2025-07.jpg
    place: "Singapore"
    date: July 2025
    caption: "Asia-Pacific Intervarsity Chinese Debate Tournament"
    alt: "Debate team group photograph with a trophy and Sichuan University banner"
    width: 1086
    height: 724
    composition: closing
---

<link rel="stylesheet" href="{{ '/assets/css/life.css' | relative_url }}">
<div class="post st-life">
  <header class="post-header life-intro">
    <h1 class="post-title">Life</h1>
    <p class="post-description">Photography, travels, and everyday moments.</p>
  </header>
  <div class="life-gallery">
    {% for photo in page.photos %}
    <figure class="life-photo life-photo--{{ photo.composition }}">
      <a href="{{ photo.src | relative_url }}" class="life-photo-link" aria-label="Enlarge: {{ photo.alt | escape }}">
        <img src="{{ photo.src | relative_url }}" alt="{{ photo.alt | escape }}" width="{{ photo.width }}" height="{{ photo.height }}" loading="{% if forloop.first %}eager{% else %}lazy{% endif %}" decoding="async">
      </a>
      <figcaption>
        <div class="life-photo-meta"><span class="life-place">{{ photo.place | escape }}</span><span class="life-date">{{ photo.date }}</span></div>
        {% if photo.caption != '' %}<p class="life-caption">{{ photo.caption | escape }}</p>{% endif %}
      </figcaption>
    </figure>
    {% endfor %}
  </div>
</div>
<dialog class="life-lightbox" aria-label="Photograph viewer">
  <button class="life-close" type="button" aria-label="Close photograph">Close <span aria-hidden="true">×</span></button>
  <figure><img alt=""><figcaption></figcaption></figure>
</dialog>
<script src="{{ '/assets/js/life.js' | relative_url }}" defer></script>

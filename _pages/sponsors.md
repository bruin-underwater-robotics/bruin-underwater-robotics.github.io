---
title: "Our Sponsors"
layout: small_banner
permalink: /sponsors
banner: /assets/images/history/2022_2023/smc_bot.webp
banner_style: "object-position: 50% 40%;"
page_title: "Our Sponsors"
---

<div class="bur-wide-container" style="margin-bottom: 40px">
    <h2 style="text-align:center;">
        In addition to the support from UCLA, we would like to give our thanks to all of our corporate sponsors this year. We would not have been able to reach where we are today without all of your help.
    </h2>
    <div style="font-style:italic;text-align:center;">
        If you or your company would like to become a sponsor, please email: <a href="mailto:bur.asmebruins@gmail.com">bur.asmebruins@gmail.com</a>
    </div>
</div>

<div class="bur-wide-container">
    <div class="row gy-5">
        {% for sponsor in site.data.sponsors %}
            <div class="col-sm-4">
                <img class="bur-sponsor-photo" src="{{site.base_url}}/{{sponsor.photo}}" loading="lazy" decoding="async" style="margin:auto;">
            </div>
        {% endfor %}
    </div>
</div>
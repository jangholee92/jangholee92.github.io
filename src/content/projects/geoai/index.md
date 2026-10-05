---
title: "Data Downscaling and Integration with AI"
summary: "Turning coarse satellite and model data and incomplete sensor records into reliable, high-resolution environmental information."
date: "Jan 01 2026"
draft: false
order: 1
---

Climate decisions often require information at scales finer than satellites and climate models provide. I develop AI methods that turn coarse observations into local temperature and precipitation fields while preserving the patterns that matter for extremes. In Chicago, I combined GOES and ECOSTRESS observations with land-cover data to estimate hourly land surface temperature at 70 m. For precipitation, I compare conditional GANs and diffusion models with deterministic baselines to test whether finer detail also represents realistic rainfall structure and heavy events. An in-press study evaluates cross-sensor land surface temperature downscaling across African cities.

High-resolution estimates also depend on trustworthy inputs. Using Chicago's CROCUS sensor network, I combine physical checks with probabilistic anomaly detection and attention-based gap filling to identify subtle errors and recover missing observations across sites. Across these studies, I assess accuracy alongside spatial realism, extreme-event behavior, and interpretability so integrated data can support urban heat and climate-risk research.

### Representative Publications

<div class="pub-card">
  <strong>Lee, J.</strong>, & Shamekh, S. (2026). Evaluation of conditional diffusion for cross-sensor land surface temperature downscaling across African cities. <em>International Journal of Remote Sensing</em>. In Press. <a href="/publications">Details</a>
</div>

<div class="pub-card">
  <strong>Lee, J.</strong>, & Shamekh, S. (2026). How far can we downscale? Resolution limits and physical interpretability of diffusion models for African precipitation. <em>Machine Learning: Earth</em>. <a href="/files/2026_LeeShamekh_MLE.pdf" download="2026_LeeShamekh_MLE.pdf">PDF</a>
</div>

<div class="pub-card">
  <strong>Lee, J.</strong>, Berkelhammer, M., et al. (2024). Urban land surface temperature downscaling in Chicago: Addressing ethnic inequality and gentrification. <em>Remote Sensing</em>. <a href="/files/2024_LeeEtAl_RS.pdf" download="2024_LeeEtAl_RS.pdf">PDF</a>
</div>

<div class="pub-card">
  <strong>Lee, J.</strong>, & Park, S. Y. (2025). WGAN-GP-based conditional GAN (cGAN) with extreme critic for precipitation downscaling in a key agricultural region of the Northeast U.S. <em>IEEE Access–Geoscience and Remote Sensing Society Section</em>. <a href="/files/2025_LeePark_IEEE.pdf" download="2025_LeePark_IEEE.pdf">PDF</a>
</div>

<div class="pub-card">
  <strong>Lee, J.</strong>, Berkelhammer, M., et al. (2026). Quality assessment and control of urban environmental sensors using physical thresholding and machine learning-based probabilities. <em>Big Earth Data</em>. <a href="/files/2026_LeeEtAl_TBED.pdf" download="2026_LeeEtAl_TBED.pdf">PDF</a>
</div>

<div class="pub-card">
  <strong>Lee, J.</strong>, Berkelhammer, M., et al. (2026). Imputation of urban environmental sensor data using gated attention bidirectional long short-term memory (GABiLSTM): Methods, performance, and implications. <em>Environmental Monitoring and Assessment</em>. <a href="/files/2026_LeeEtAl_EMA.pdf" download="2026_LeeEtAl_EMA.pdf">PDF</a>
</div>

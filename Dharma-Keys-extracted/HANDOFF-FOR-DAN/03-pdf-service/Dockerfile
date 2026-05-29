# Dharma Keys PDF service — Railway / Docker deploy.
# WeasyPrint needs system libraries (Pango, Cairo, etc.); a Dockerfile is the
# reliable way to deploy it.
FROM python:3.11-slim

# system libraries WeasyPrint needs at runtime
RUN apt-get update && apt-get install -y --no-install-recommends \
      libpango-1.0-0 \
      libpangoft2-1.0-0 \
      libpangocairo-1.0-0 \
      libharfbuzz0b \
      libgdk-pixbuf-2.0-0 \
      libcairo2 \
      libffi-dev \
      shared-mime-info \
      fonts-dejavu \
      fonts-liberation \
 && rm -rf /var/lib/apt/lists/*

WORKDIR /app
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt
COPY . .

EXPOSE 8080
# 120s timeout — PDF rendering + Google Fonts fetch can take a few seconds
CMD ["gunicorn", "--bind", "0.0.0.0:8080", "--timeout", "120", "--workers", "2", "dharma_keys_pdf_service:app"]

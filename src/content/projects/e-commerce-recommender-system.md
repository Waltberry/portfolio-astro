---
title: E-Commerce Recommender System
summary: Production-ready, modular recommender with popularity, item-to-item, and cart-aware hybrid strategies over RetailRocket data; batch + streaming simulation; Streamlit UI.
duration: June 2025
---

# E-Commerce Recommender System

**Duration:** June 2025

A modular, production-oriented product recommender built in Python with Streamlit.

**What it does**
- Suggests relevant items using real-time and historical user behaviour (views, purchases, cart).
- Implements baseline popularity, item-to-item cosine similarity, and a cart-aware hybrid method.
- Simulates batch & streaming pipelines to mirror a scalable e‑commerce stack.

**Highlights**
- **Data**: RetailRocket dataset (sessions, interactions, item meta)
- **Models**: popularity, co-visitation matrix, cosine item embedding similarity, hybrid scoring
- **Pipelines**: offline feature generation (batch) + a lightweight streaming simulation
- **App**: Streamlit interface for interactive demo, scenario toggles, and live recommendations

**Architecture (conceptual)**
Offline ETL → Feature Store (parquet/Delta) → Batch similarity matrices  
Streaming consumer → Session cache → Hybrid scorer → Streamlit UI

**Stack**
Python, pandas, NumPy, scikit-learn, Streamlit, PySpark (optional), Parquet/Delta.

**Next**
Add bandit policy for exploration/exploitation and implicit MF (ALS) for cold-start.

**GitHub**: <https://github.com/Waltberry/recommender-system>


__NUXT_JSONP__("/zh-hant/conference/talk/237", (function(a,b){b.id=237;b.begin_time="2022-09-04T04:45:00Z";b.end_time="2022-09-04T05:15:00Z";b.is_remote=false;b.location="4-r0";b.youtube_id="L00UMsORp6Q";b.title="AI產品開發維運(MLOps)之迭代歷程分享 The Journey of AI Product Development and Improvement";b.category="APPL";b.language="ZHEN";b.python_level="INTERMEDIATE";b.recording_policy=true;b.abstract="MLOps 是機器學習(Machine Learning) 與軟體開發維運(DevOps) 結合的縮寫，近年來業界將 AI產品化特別受重視的領域，因為 ML\u002FDL 模型離開實驗環境，將面臨更多效能、穩定性、持續優化等挑戰。本演講以企業內部的產品為例子，分享我們在實務上如何讓商業需求以及技術研究落地，在完全基於 Python 的環境，從零打造出基礎可用的系統，到經過兩階段迭代升級的現行版本，過程中在架構設計與工具選擇上所遇到的瓶頸和困難點，以及我們的解決方式。";b.detailed_description="MLOps 為機器學習(Machine Learning) 與軟體開發維運(DevOps) 結合的縮寫，是近年來業界將 AI產品化的過程中特別受到重視的領域，因為 ML\u002FDL 模型離開實驗環境，將面臨更多效能、穩定性、持續優化等挑戰。本演講以企業內部的產品為例子，分享我們在實務上如何讓商業需求以及技術研究落地，完全基於 Python 的環境，從零打造出基礎可用的系統，到經過兩階段迭代升級的現行版本，過程中在架構設計與工具選擇上所遇到的瓶頸和困難點，以及我們的解決方式。\r\n\r\n涉及的範圍較廣，卻絕大部分都是在 Python 環境、使用相關套件開發，包含演算法、環境\u002F版本管理、服務部署、資料儲存、ETL、工作流程管理等，以下簡述各個項目的功能與定位：\r\n\r\n#### Service\r\n[FastAPI](https:\u002F\u002Ffastapi.tiangolo.com\u002F) & [Celery](https:\u002F\u002Fdocs.celeryq.dev\u002Fen\u002Fstable\u002F)\r\n由於有即時運算的需求，所以我們將後端分成兩塊，一個是接收請求提供結果的 Server (FastAPI)，FastAPI 提供高效率輕量化的 Framework。另一個是及時運算的 Worker (Celery)，Celery 幫助我們建立 Distributed System，讓我們有更多的擴展性。\r\n\r\n#### ML Algorithm & Calculation\r\n[Pytorch](https:\u002F\u002Fpytorch.org\u002F) \r\n我們從 Pytorch 中取用 Pretrain Model (VGG & BERT)，將圖片、文字轉化為可量化的向量。\r\n\r\n[Faiss](https:\u002F\u002Fgithub.com\u002Ffacebookresearch\u002Ffaiss)\r\n向量資料間需要做相似度計算作為我們的預測結果，我們選用的是 Facebook 開源的 Faiss，能夠做到向量計算&向量壓縮，讓我們可以在資源，速度與精確度之間做抉擇。\r\n\r\n#### Data Storage\r\n[PyMongo](https:\u002F\u002Fpymongo.readthedocs.io\u002Fen\u002Fstable\u002F)\r\n由於資料間沒有儲存關聯性的需求，所以我們選用 MongoDB (Nosql) 作為資料庫，在 Python 端我們使用 Pymongo & Motor 對 MongoDB 存取 ML Model 處理過後的特徵資料。\r\n\r\n[Cloud Storage](https:\u002F\u002Fcloud.google.com\u002Fstorage)\r\nVM 彼此之間的檔案存取我們選用雲端方案，穩定且在使用上也非常方便。在 Python 端我們使用 Google 提供的 Python SDK 操作 Cloud Storage。\r\n\r\n#### Vector ETL\r\n[Pika](https:\u002F\u002Fpika.readthedocs.io\u002Fen\u002Fstable\u002F) & [aiohttp](https:\u002F\u002Fdocs.aiohttp.org\u002Fen\u002Fstable\u002F)\r\n我們採用 RabbitMQ(Pika) 建構商品資料向量轉換流程，Producer 夠過異步爬蟲(aiohttp)進行資料資料蒐集及過濾；Consumer 負責任務收集和向量轉換（GPU運算），兩個系統彼此不會直接溝通，而是將任務透過 Queue 暫存與傳遞，提高擴展性並加速任務的消化速度。\r\n\r\n#### Workflow Management\r\n[Apache Airflow](https:\u002F\u002Fpypi.org\u002Fproject\u002Fpymongo\u002F)\r\n整個產品架構可分為 Model Training Pipeline、Model Serving Pipeline & ETL Pipeline，任務間有高度的相依性與併行需求，我們使用 Airflow 作為工作流程管理工具。\r\n\r\nReference\r\n[MLOps: Continuous delivery and automation pipelines in machine learning](https:\u002F\u002Fcloud.google.com\u002Farchitecture\u002Fmlops-continuous-delivery-and-automation-pipelines-in-machine-learning)";b.slide_link="https:\u002F\u002Fdrive.google.com\u002Ffile\u002Fd\u002F1puUky1GHzn3L9Snv_Z3h4BI4Z6q-5szl\u002Fview";b.slido_embed_link="https:\u002F\u002Fapp.sli.do\u002Fevent\u002FdnRPNWieaa4Po8HXUX4tLg";b.hackmd_embed_link="https:\u002F\u002Fhackmd.io\u002F@pycontw\u002FHJCWPpXko";b.speakers=[{thumbnail_url:"https:\u002F\u002Ftw.pycon.org\u002Ftemp\u002Fmedia\u002Fcache\u002F3b\u002F0a\u002F3b0a6032cf517b9dcc203c9972c6df86.jpg",name:"張仲樸 Enzo Chang",github_profile_url:a,twitter_profile_url:a,facebook_profile_url:"https:\u002F\u002Fwww.facebook.com\u002Fenzoapu",bio:"I'm Enzo, an atypical developer with experience covering Data x Software x Education, working as a Data Engineer & Scrum Master in e-commerce company, focusing on ETL, Data Pipeline, MLOps, Crawler & RESTful API.\r\n\r\nPassionate about learning and sharing. I have been a volunteer and speaker in the Data & Agile community for a long time, and I have served as a Python Web Crawler course lecturer in the company.  👋 Feel free to contact me!                     \r\n\r\nLinkedin ➡️ https:\u002F\u002Fwww.linkedin.com\u002Fin\u002Fenzochang\u002F"},{thumbnail_url:"https:\u002F\u002Ftw.pycon.org\u002Ftemp\u002Fmedia\u002Fcache\u002Fa3\u002Fdc\u002Fa3dc15c77656d29f13ba1e3ec49fea97.jpg",name:"黃奕鳴 Polo Huang",github_profile_url:a,twitter_profile_url:a,facebook_profile_url:a,bio:"As a software engineer with 4 years of experience in the E-commerce industry, I've been in charge of ML Ops and Data Pipeline by Python. Furthermore, my focus area also includes FastAPI, MySQL, and Docker. As for career planning in the next few years, implementing machine learning models and learning ML Ops are my major objectives.\r\n👋 Feel free to contact me!\r\n\r\nLinkedIn: www.linkedin.com\u002Fin\u002Fyiming-huang-6026601b3"}];b.event_type="talk";return {data:[{speechData:b}],fetch:{},mutations:[["setSpeechData",b]]}}("",{})));
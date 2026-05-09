# 年度別学会誌アーカイブ システム

## 📚 システム構成

```
journal.html (最新号のみ表示)
    ↓
archives.html (学会誌タブ)
    ├─ 2024年 → journal-2024.html
    ├─ 2023年 → journal-2023.html
    ├─ 2022年 → journal-2022.html
    └─ 2021年 → journal-2021.html
```

---

## 📄 含まれるファイル

### 新規作成ファイル（2個）
1. **journal-2024.html** - 2024年発行の学会誌専用ページ
2. **journal-2023.html** - 2023年発行の学会誌専用ページ

### 更新ファイル（2個）
3. **archives.html** - 学会誌タブのリンクを年度別ページに変更
4. **styles.css** - パンくずリストと年度ナビゲーション用CSS追加

### 既存ファイル（そのまま）
- index.html
- news.html
- research.html
- journal.html
- script.js
- news-filter.js
- README.md

---

## 🎯 動作の仕組み

### 訪問者の視点

```
1. トップページ
   ↓
2. 「学会誌」をクリック
   ↓
3. journal.html（最新号のみ表示）
   ↓
4. 「過去の学会誌を見る」→ archives.html
   ↓
5. 「学会誌」タブをクリック
   ↓
6. 年度別リスト
   - 2024年 [詳細を見る] → journal-2024.html
   - 2023年 [詳細を見る] → journal-2023.html
   - 2022年 [詳細を見る] → journal-2022.html
```

### journal-2024.html の構造

```html
パンくずリスト
ホーム > 学会誌 > アーカイブ > 2024年

┌────────────────────────────┐
│ 学会誌 2024年              │
├────────────────────────────┤
│ [表紙画像]  │ 第7号         │
│             │ ISSN          │
│             │ タイトル       │
│             │ 目次          │
│             │  - 論文1 PDF  │
│             │  - 論文2 PDF  │
│             │  - 論文3 PDF  │
│             │ 統合版PDF     │
│             │ 刊行情報      │
└────────────────────────────┘

年度ナビゲーション
[アーカイブ一覧に戻る] [← 2023年]
```

---

## 📝 新しい学会誌を追加する手順

### 【例】2025年の第8号を追加する場合

#### ステップ1: journal-2025.htmlを作成（10分）

1. **journal-2024.htmlをコピー**
   - GitHubで`journal-2024.html`を開く
   - Raw表示してコピー

2. **新しいファイルを作成**
   - リポジトリで「Add file」→「Create new file」
   - ファイル名: `journal-2025.html`
   - コピーした内容を貼り付け

3. **内容を更新**
   ```html
   <!-- タイトル変更 -->
   <title>学会誌 2025年 | ハイデガー研究会</title>
   
   <!-- パンくずリスト変更 -->
   <span>2025年</span>
   
   <!-- ページタイトル変更 -->
   <h1 class="page-title">学会誌 2025年</h1>
   <p class="page-subtitle">2025年に発行された学会誌</p>
   
   <!-- 第8号に変更 -->
   <span class="issue-badge">第8号</span>
   <h2 class="issue-title-large">ハイデガー研究会編『Zuspiel』第8号、2025年</h2>
   
   <!-- 論文情報を新しい内容に置き換え -->
   <article class="toc-item">
       <div class="toc-content">
           <h4 class="toc-article-title">新しい論文タイトル</h4>
           <p class="toc-author">著者名</p>
           <span class="toc-pages">pp. 1–30</span>
       </div>
       <a href="pdfs/2025/vol8-paper1.pdf" ...>PDF</a>
   </article>
   
   <!-- 刊行情報更新 -->
   <span class="pub-value">2025年3月31日</span>
   
   <!-- ナビゲーション更新 -->
   <a href="journal-2024.html" class="btn-secondary">← 2024年</a>
   ```

4. **Commit changes**

#### ステップ2: archives.htmlを更新（5分）

1. **archives.htmlを開く**

2. **学会誌アーカイブセクションの最上部に追加**
   ```html
   <!-- 第8号 -->
   <div class="journal-archive-item">
       <div class="journal-year">2025年</div>
       <div class="journal-info">
           <h3 class="journal-number">第8号</h3>
           <p class="journal-theme">特集：XXX</p>
           <div class="journal-meta">
               <span class="journal-issn">ISSN 2433-3344</span>
               <span class="journal-date">2025年3月31日発行</span>
           </div>
           <a href="journal-2025.html" class="btn-secondary">詳細を見る</a>
       </div>
   </div>
   ```

3. **Commit changes**

#### ステップ3: journal.htmlを更新（5分）

1. **journal.htmlを開く**

2. **古い号のバッジを削除**
   ```html
   <!-- 第7号から削除 -->
   <span class="issue-badge">最新号</span>  ← 削除
   ```

3. **新しい号（第8号）のセクションを追加**

4. **Commit changes**

**所要時間：合計20分**

---

## 🎨 journal-YYYY.html のカスタマイズポイント

### 表紙画像

```html
<img src="images/journal/vol8-cover.jpg" alt="Zuspiel Bd. 8 (2025) 表紙">
```

**画像アップロード方法:**
1. GitHubで`images/journal/`フォルダを作成
2. 表紙画像をアップロード
3. パスを上記のように指定

### 特集がある場合

```html
<div class="toc-category">
    <p class="category-title">特集：XXX</p>
</div>
```

### 特集がない場合

```html
<!-- <div class="toc-category">... のブロック全体を削除 -->
```

### 論文の追加

```html
<article class="toc-item">
    <div class="toc-content">
        <h4 class="toc-article-title">論文タイトル</h4>
        <p class="toc-author">著者名</p>
        <span class="toc-pages">pp. 開始–終了</span>
    </div>
    <a href="PDFのURL" class="toc-download" target="_blank" rel="noopener">PDF</a>
</article>
```

### 統合版PDFのリンク

```html
<a href="pdfs/2025/vol8-full.pdf" class="btn-full-download" ...>
    統合版（一括ダウンロード）
</a>
```

---

## 📋 完全なチェックリスト

### 新しい学会誌を追加する際のチェックリスト

```
□ journal-YYYY.htmlを作成した
□ タイトルを年度に合わせて変更した
□ パンくずリストを更新した
□ 号数（第X号）を更新した
□ 論文情報を新しい内容に置き換えた
□ 刊行情報（日付、ページ数）を更新した
□ 年度ナビゲーションを更新した
□ archives.htmlに新しい号を追加した
□ journal.htmlの最新号バッジを更新した
□ ブラウザで表示を確認した
```

---

## 🔧 トラブルシューティング

### 問題: リンクをクリックしても何も表示されない

**原因:** ファイル名が間違っている

**解決方法:**
- archives.htmlのリンク: `href="journal-2024.html"`
- 実際のファイル名: `journal-2024.html`
- **大文字・小文字が一致しているか確認**

### 問題: 表紙画像が表示されない

**原因:** 画像のパスが間違っている

**解決方法:**
1. GitHubで画像ファイルが正しい場所にあるか確認
2. パスを確認: `src="images/journal/vol7-cover.jpg"`

### 問題: パンくずリストが表示されない

**原因:** CSSが読み込まれていない

**解決方法:**
- styles.cssに`.breadcrumb`のスタイルが含まれているか確認
- 最新のstyles.cssをアップロードしたか確認

---

## 💡 よくある質問

### Q1: 毎年新しいHTMLファイルを作る必要がある？

**A:** はい。journal-2024.html、journal-2025.html のように、年度ごとに1つのHTMLファイルを作成します。

### Q2: 1年に複数の号を発行した場合は？

**A:** 同じHTML内に複数の号を追加できます。

例：
```html
<!-- 第8号 -->
<section id="vol8" class="journal-issue-featured">
    ...
</section>

<!-- 第7号（同じ年の別の号） -->
<section id="vol7" class="journal-issue">
    ...
</section>
```

### Q3: journal.htmlとjournal-YYYY.htmlの違いは？

**A:**
- **journal.html** = 最新号のみ表示
- **journal-2024.html** = 2024年発行の全号を表示

---

## ✅ システムの利点

1. ✅ **見やすい**: 年度ごとに整理されている
2. ✅ **検索しやすい**: 特定の年の学会誌がすぐ見つかる
3. ✅ **管理しやすい**: 各年度のHTMLを独立して管理
4. ✅ **拡張しやすい**: 新しい年度の追加が簡単
5. ✅ **読み込み高速**: 1ページに全履歴を載せないので軽い

---

## 📊 ファイル構成図

```
heidegger-society/
├── index.html
├── news.html
├── research.html
├── journal.html          ← 最新号のみ
├── archives.html         ← 全履歴の一覧
├── journal-2024.html     ← 2024年の詳細
├── journal-2023.html     ← 2023年の詳細
├── journal-2022.html     ← 2022年の詳細（サンプル）
├── styles.css
├── script.js
└── pdfs/
    ├── 2024/
    │   ├── vol7-paper1.pdf
    │   ├── vol7-paper2.pdf
    │   └── vol7-full.pdf
    ├── 2023/
    │   ├── vol6-paper1.pdf
    │   └── vol6-full.pdf
    └── ...
```

---

これで年度別学会誌アーカイブシステムが完成しました！

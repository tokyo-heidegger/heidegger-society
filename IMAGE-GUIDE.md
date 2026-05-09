# 画像付きお知らせの追加ガイド

## 📸 ステップ1: 画像を準備する

### 推奨サイズ

1. **フライヤー・ポスター**: 800×600px 程度
2. **イベント写真**: 1200×800px 程度
3. **サムネイル**: 300×200px 程度

### 画像形式

- JPG（写真）: 推奨
- PNG（透明背景が必要な場合）: 可能
- ファイルサイズ: 500KB以下推奨

---

## 📁 ステップ2: GitHubに画像をアップロード

### 2-1. imagesフォルダを作成（初回のみ）

1. GitHubリポジトリを開く
2. 「Add file」→「Create new file」
3. ファイル名に「`images/.gitkeep`」と入力
4. 「Commit new file」をクリック

### 2-2. 画像をアップロード

1. `images`フォルダをクリック
2. 「Add file」→「Upload files」
3. 画像ファイルをドラッグ&ドロップ
4. 「Commit changes」をクリック

**ファイル名の例:**
- `event-2026-06.jpg` ← 日付を入れる
- `ueda-flyer.jpg` ← 内容がわかる名前
- `meeting-photo-01.jpg` ← 連番を使う

### 2-3. 画像のパスを確認

アップロード後、画像のパスは以下のようになります：

```
images/event-2026-06.jpg
images/ueda-flyer.jpg
images/meeting-photo-01.jpg
```

**重要:** GitHub上で画像をクリックして表示されることを確認してください。

---

## 📝 ステップ3: news.htmlに画像を追加

### パターン1: 単一画像（フライヤー・ポスター）

```html
<article id="2026-06-15" class="blog-article">
    <div class="article-header">
        <time class="article-date">2026-06-15</time>
        <span class="article-tag">例会案内</span>
    </div>
    <h2 class="article-title">【例会案内】6月例会のお知らせ</h2>
    
    <!-- ★★★ ここに画像を追加 ★★★ -->
    <div class="article-image">
        <img src="images/event-2026-06.jpg" alt="6月例会フライヤー">
    </div>
    
    <div class="article-body">
        <p>本文...</p>
    </div>
</article>
```

### パターン2: 複数画像（イベント写真）

```html
<article id="2026-05-20" class="blog-article">
    <div class="article-header">
        <time class="article-date">2026-05-20</time>
        <span class="article-tag">イベント報告</span>
    </div>
    <h2 class="article-title">5月例会を開催しました</h2>
    
    <!-- ★★★ 複数画像をグリッド表示 ★★★ -->
    <div class="article-images-grid">
        <img src="images/photo1.jpg" alt="会場の様子">
        <img src="images/photo2.jpg" alt="発表の様子">
        <img src="images/photo3.jpg" alt="質疑応答">
    </div>
    
    <div class="article-body">
        <p>本文...</p>
    </div>
</article>
```

### パターン3: サムネイル（クリックで拡大）

```html
<article id="2024-07-21" class="blog-article">
    <div class="article-header">
        <time class="article-date">2024-07-21</time>
        <span class="article-tag">特別企画</span>
    </div>
    <h2 class="article-title">合評会のお知らせ</h2>
    
    <!-- ★★★ クリックで拡大できるサムネイル ★★★ -->
    <div class="article-thumbnails">
        <a href="images/ueda-flyer-full.jpg" target="_blank" class="thumbnail-link">
            <img src="images/ueda-flyer-full.jpg" alt="合評会フライヤー" class="thumbnail">
            <span class="thumbnail-label">クリックで拡大</span>
        </a>
    </div>
    
    <div class="article-body">
        <p>本文...</p>
    </div>
</article>
```

---

## 🗂️ ステップ4: archives.htmlにサムネイルを追加

### 画像なしの記事（従来通り）

```html
<article class="archive-item">
    <time class="archive-date">2026-04-15</time>
    <div class="archive-info">
        <span class="archive-category">例会案内</span>
        <h3 class="archive-title">4月例会のお知らせ</h3>
        <p class="archive-excerpt">概要...</p>
    </div>
    <a href="news.html#2026-04-15" class="archive-link">詳細を見る →</a>
</article>
```

### 画像ありの記事

```html
<article class="archive-item">
    <time class="archive-date">2026-06-15</time>
    
    <!-- ★★★ サムネイル画像を追加 ★★★ -->
    <div class="archive-thumbnail">
        <img src="images/event-2026-06.jpg" alt="6月例会">
    </div>
    
    <div class="archive-info">
        <span class="archive-category">例会案内</span>
        <h3 class="archive-title">6月例会のお知らせ</h3>
        <p class="archive-excerpt">概要...</p>
    </div>
    <a href="news.html#2026-06-15" class="archive-link">詳細を見る →</a>
</article>
```

---

## 🎨 表示イメージ

### news.htmlでの表示

```
┌─────────────────────────────┐
│ 【例会案内】6月例会のお知らせ │
├─────────────────────────────┤
│                             │
│   ┌─────────────────┐      │
│   │                 │      │
│   │   フライヤー画像  │      │
│   │                 │      │
│   └─────────────────┘      │
│                             │
│ 開催概要                     │
│ ・日時：...                  │
│ ・場所：...                  │
└─────────────────────────────┘
```

### archives.htmlでの表示

```
┌────────────────────────────────────┐
│ 2026年                             │
├────────────────────────────────────┤
│ 2026-06-15  [サムネイル]  例会案内 │
│              画像        6月例会... │
│                          詳細 →    │
└────────────────────────────────────┘
```

---

## 💡 よくある質問

### Q1: 画像が表示されない

**原因:**
- ファイルパスが間違っている
- 画像がGitHubにアップロードされていない

**解決方法:**
1. GitHubで`images`フォルダを開く
2. 画像ファイルが存在するか確認
3. HTMLのsrc属性を確認：`src="images/ファイル名.jpg"`

### Q2: 画像が大きすぎる

**解決方法:**
- CSSで自動的に調整されます
- 元画像を500KB以下に圧縮することを推奨

### Q3: 外部URLの画像を使いたい

**方法:**
```html
<img src="https://example.com/image.jpg" alt="説明">
```

**注意:**
- リンク切れのリスクあり
- GitHubアップロードを推奨

### Q4: 複数枚の写真をスライドショーにしたい

**現状:** 静的な表示のみ
**将来対応:** JavaScriptでスライドショー機能を追加可能

---

## ✅ チェックリスト

画像付きお知らせを追加する際のチェックリスト：

```
□ 画像を準備した（JPG形式、500KB以下）
□ imagesフォルダを作成した
□ 画像をGitHubにアップロードした
□ news.htmlに画像コードを追加した
□ archives.htmlにサムネイルを追加した
□ index.htmlの最新3件を更新した
□ ブラウザで画像が表示されることを確認した
```

---

## 📊 所要時間

- 画像準備：5分
- GitHubアップロード：3分
- news.html更新：5分
- archives.html更新：3分
- 確認：2分

**合計：約20分**

---

## 🎯 実例

### 実際の使用例（上田圭委子合評会）

現在のnews.htmlに既にある例：

```html
<article id="2024-06-11" class="blog-article">
    <div class="article-header">
        <time class="article-date">2024-06-11</time>
        <span class="article-tag">特別企画</span>
    </div>
    <h2 class="article-title">上田圭委子『ハイデガーにおける存在と神の問題』合評会</h2>
    
    <!-- すでに画像が使われている例 -->
    <div class="article-image">
        <img src="https://heidegger.exblog.jp/iv/detail/?s=34090728&i=202406%2F11%2F14%2Ff0057514_16230741.jpg" 
             alt="合評会フライヤー">
    </div>
    
    <div class="article-body">
        <h3>開催概要</h3>
        <p>...</p>
    </div>
</article>
```

**この例を参考に、同じ構造で画像を追加できます！**

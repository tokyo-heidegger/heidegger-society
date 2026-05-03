# ハイデガー研究会 ウェブサイト

## 概要

このウェブサイトは、ハイデガー研究会の公式サイトです。研究会の告知、学会誌の公開、メンバー情報などを掲載しています。

## 特徴

- **完全無料・広告なし**: GitHub Pagesで運営（無料、広告表示なし）
- **HTTPSセキュア**: 自動でHTTPS対応
- **レスポンシブデザイン**: スマートフォン・タブレット・PCに対応
- **簡単更新**: HTMLの知識がなくても、テキストを編集するだけで更新可能

## ファイル構成

```
heidegger-society/
├── index.html          # ホームページ
├── research.html       # 研究内容ページ
├── journal.html        # 学会誌ページ
├── news.html          # お知らせページ
├── styles.css         # スタイルシート（デザイン）
├── script.js          # JavaScriptファイル（アニメーション）
├── news-filter.js     # ニュースフィルタ機能
└── README.md          # このファイル
```

## GitHub Pagesでの公開方法

### 1. GitHubアカウントの作成
1. https://github.com にアクセス
2. 「Sign up」をクリックしてアカウント作成

### 2. リポジトリの作成
1. GitHubにログイン
2. 右上の「+」→「New repository」
3. Repository name: `heidegger-society`（または任意の名前）
4. Public を選択
5. 「Create repository」をクリック

### 3. ファイルのアップロード
1. 作成したリポジトリのページで「uploading an existing file」をクリック
2. すべてのHTMLファイル、CSS、JSファイルをドラッグ&ドロップ
3. 「Commit changes」をクリック

### 4. GitHub Pagesの有効化
1. リポジトリの「Settings」をクリック
2. 左メニューから「Pages」を選択
3. Source: 「Deploy from a branch」を選択
4. Branch: 「main」を選択、フォルダは「/ (root)」
5. 「Save」をクリック
6. 数分後、サイトが公開されます（URL: `https://ユーザー名.github.io/heidegger-society/`）

## コンテンツの更新方法

### 基本的な更新の流れ
1. GitHub上で編集したいファイルを開く
2. 鉛筆アイコン（Edit this file）をクリック
3. テキストを編集
4. 下部の「Commit changes」をクリック
5. 数分後、サイトに反映されます

### よくある更新タスク

#### 1. 学会誌の新号追加（journal.html）

journal.htmlの構造は参考サイト（https://heidegger2017.wixsite.com/mysite/zuspiel-bd-6-2023）を踏襲しています。

**新しい号を追加する手順：**

1. journal.htmlを開く
2. `<section id="vol6" class="journal-issue-featured">`セクションを見つける
3. `id="vol6"`を`id="vol7"`に変更（号数を更新）
4. 以下の部分を新しい内容に置き換える：

**表紙画像：**
```html
<img src="表紙画像のURL" alt="Zuspiel Bd. 7 (2024) 表紙">
```

**タイトルとISSN：**
```html
<h2 class="issue-title-large">ハイデガー研究会編『Zuspiel』第7号、2024年</h2>
<p class="issue-theme">Heidegger Gesellschaft Tokio (Hrsg.), Zuspiel, Bd. 7, 2024.</p>
```

**目次カテゴリ（特集がある場合）：**
```html
<div class="toc-category">
    <p class="category-title">特集テーマをここに記載</p>
</div>
```

**論文情報の追加：**
各論文について、`<div class="toc-items">`内に以下を追加：

```html
<article class="toc-item">
    <div class="toc-content">
        <h4 class="toc-article-title">論文タイトル</h4>
        <p class="toc-author">著者名</p>
        <span class="toc-pages">pp. 1–10</span>
    </div>
    <a href="PDFファイルのURL" class="toc-download" target="_blank" rel="noopener">PDF</a>
</article>
```

**統合版ダウンロードリンク：**
```html
<a href="統合版PDFのURL" class="btn-full-download" target="_blank" rel="noopener">
    統合版（一括ダウンロード）
</a>
```

**刊行情報：**
```html
<div class="pub-detail">
    <span class="pub-label">刊行日</span>
    <span class="pub-value">2024年3月31日</span>
</div>
<div class="pub-detail">
    <span class="pub-label">編集担当</span>
    <span class="pub-value">編集者名</span>
</div>
```

#### 2. お知らせの追加（news.html）

news.htmlを開き、以下のブロックをコピーして、`<div class="news-timeline">`の直後に追加：

```html
<article class="news-detail" data-category="event">
    <div class="news-date-badge">
        <span class="date-day">日付</span>
        <span class="date-month">2026.XX</span>
    </div>
    <div class="news-body">
        <div class="news-category">カテゴリ名</div>
        <h2 class="news-title-large">タイトル</h2>
        <div class="news-content">
            <p>本文をここに記載...</p>
        </div>
    </div>
</article>
```

**カテゴリの種類**:
- `data-category="event"`: 研究会
- `data-category="publication"`: 学会誌
- `data-category="other"`: その他

#### 2. メンバーの追加（members.html）

members.htmlを開き、`<div class="members-grid">`内に以下を追加：

```html
<div class="member-card">
    <div class="member-info">
        <h3 class="member-name">名前</h3>
        <p class="member-position">所属・役職</p>
        <p class="member-specialty">専門：専門分野</p>
    </div>
</div>
```

#### 3. 学会誌の新号追加（journal.html）

journal.htmlを開き、論文情報を追加：

```html
<article class="article-item">
    <div class="article-type">論文</div>
    <h3 class="article-title">論文タイトル</h3>
    <p class="article-author">著者名</p>
    <p class="article-abstract">
        要旨をここに記載...
    </p>
    <div class="article-actions">
        <a href="PDFファイルのURL" class="btn-download" download>PDF ダウンロード</a>
        <span class="article-pages">pp. 1-24</span>
    </div>
</article>
```

#### 4. PDFファイルのアップロード方法

1. GitHubリポジトリで「Add file」→「Upload files」
2. PDFファイルをドラッグ&ドロップ
3. 「Commit changes」をクリック
4. アップロードしたPDFのURLをコピー
   - 例: `https://raw.githubusercontent.com/ユーザー名/heidegger-society/main/ファイル名.pdf`
5. HTMLファイルの `href="PDFファイルのURL"` 部分に貼り付け

#### 5. 連絡先情報の更新

index.html、research.html、members.html、journal.html、news.htmlの
フッター部分（`<footer class="main-footer">`）を一括で更新：

```html
<p class="footer-contact">
    Email: info@heidegger-society.jp<br>
    〒XXX-XXXX<br>
    東京都XXX区XXX
</p>
```

## デザインのカスタマイズ

### 配色の変更（styles.css）

styles.cssの最初の部分（`:root`セクション）で色を変更できます：

```css
:root {
    --primary-dark: #1a2332;      /* メインの濃い色 */
    --accent-gold: #c9a961;       /* アクセントカラー */
    /* 他の色も同様に変更可能 */
}
```

### フォントの変更

index.htmlの`<head>`セクションにあるGoogle Fontsのリンクを変更することで、
別のフォントを使用できます。

## トラブルシューティング

### サイトが表示されない
- GitHub Pagesの設定を確認（Settings → Pages）
- ブランチが「main」に設定されているか確認
- 5-10分待ってから再度アクセス

### 更新が反映されない
- ブラウザのキャッシュをクリア（Ctrl+Shift+R または Cmd+Shift+R）
- 5-10分待ってから確認

### レイアウトが崩れる
- HTMLタグの閉じ忘れがないか確認
- コピー&ペーストした箇所の構文エラーを確認

## サポート

技術的な質問がある場合は、以下のリソースを参照してください：

- GitHub Pages公式ドキュメント: https://docs.github.com/ja/pages
- HTMLリファレンス: https://developer.mozilla.org/ja/docs/Web/HTML

## ライセンス

このウェブサイトのコードは自由に使用・改変できます。

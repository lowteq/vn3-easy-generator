
//termのデータ　["UID","条項のテキスト","ONのときの表示","OFFのときの表示","画像ファイル名"]
var terms = [
    ["A", "個人による利用", "許可", "不許可", "a.png"],
    ["B", "法人による利用", "許可", "不許可", "b.png"],
    ["C", "自ら利用する目的で、ソーシャルコミュニケーションプラットフォーム（VRChat、Virtual Cast、cluster等を含みます）へアップロードすること", "許可", "不許可", "c.png"],
    ["D", "自ら利用する目的で、オンラインゲームプラットフォームへアップロードすること", "許可", "不許可", "d.png"],
    ["E", "そのプラットフォームにおいて第三者に利用させる目的で、ソーシャルコミュニケーションプラットフォームやオンラインゲームプラットフォームへアップロードすること", "許可", "不許可", "e.png"],
    ["F", "性的表現への利用", "許可", "不許可", "f.png"],
    ["G", "暴力的表現への利用", "許可", "不許可", "g.png"],
    ["H", "政治活動への利用および、宗教活動への利用", "許可", "不許可", "h.png"],
    ["I", "調整、外観を損なわない範囲でのポリゴン数削減、およびファイル形式を変換すること", "許可", "不許可", "i.png"],
    ["J", "本データまたはパーツを改変することおよび、改変したデータを本データと同じ条件で利用すること（本データまたはパーツを主たる素体として、改変を行う場合を含みます）", "許可", "不許可", "j.png"],
    ["K", "他のデータを改変する目的で、本データまたはパーツを用いること（本データまたはパーツを従たる素体として、他のモデルを主たる素体として改変を行う場合を含みます）", "許可", "不許可", "k.png"],
    ["L", "調整または改変を第三者に委託して行うことおよび、委託のために本データを貸与すること", "許可", "不許可", "l.png"],
    ["M", "未改変状態での再配布", "許可", "不許可", "m.png"],
    ["N", "改変した本データを配布すること", "許可", "不許可", "n.png"],
    ["O", "映像作品、配信（Youtubeを含みます）、放送への利用", "許可", "不許可", "o.png"],
    ["P", "出版物および電子出版物への利用", "許可", "不許可", "p.png"],
    ["Q", "有体物（グッズ）への利用", "許可", "不許可", "q.png"],
    ["R", "製品開発等のためにソフトウェア（ゲームを含みます）へ組み込み、容易に取り出せない状態にして配布すること", "許可", "不許可", "r.png"],
    ["S", "本データのメッシュやウェイトをコピーして、本データのための衣装データ等を作成すること（ただし改変が著しく少ない場合を除きます）", "許可", "不許可", "s.png"],
    ["T", "本データのメッシュやウェイトを利用せずに、本データの規格に準拠した新たな衣装データ等やテクスチャデータ等を作成すること", "許可", "不許可", "t.png"],
    ["U", "本データをそのまま利用しないで、本データをモチーフにした二次的著作物（いわゆる二次創作）を作成すること", "許可", "不許可", "u.png"],
    ["V", "利用時のクレジット表記", "必要", "不要", "v.png"],
    ["W", "権利義務の譲渡等", "許可", "不許可", "w.png"],
    ["X", "特記事項", "あり", "なし", "x.png"]
];
import Head from "next/head"
import Link from "next/link"
import Layout, { siteTitle } from "../components/layout"
import utilStyle from "../styles/util.module.css"
import companyStyle from "./company.module.css"

export default function Company() {
  return (
    <Layout>
      <Head>
        <title>会社概要</title>
      </Head>
      <h2 className={utilStyle.headingLg}><span>Company</span></h2>

      <h4 className={companyStyle.headingCompamy}>会社概要</h4>
      <dl className={companyStyle.flexContainer}>
        <div className={companyStyle.flexItem}>
          <dt className={companyStyle.dtTitle}>会社名</dt>
          <dd className={companyStyle.ddItem}>西村印刷株式会社</dd>
        </div>
        <div className={companyStyle.flexItem}>
          <dt className={companyStyle.dtTitle}>創業年月日</dt>
          <dd className={companyStyle.ddItem}>昭和26年9月1日（個人創業）</dd>
        </div>
        <div className={companyStyle.flexItem}>
          <dt className={companyStyle.dtTitle}>創立年月日</dt>
          <dd className={companyStyle.ddItem}>昭和35年5月10日（西村印刷株式会社）</dd>
        </div>
        <div className={companyStyle.flexItem}>
          <dt className={companyStyle.dtTitle}>資本金</dt>
          <dd className={companyStyle.ddItem}>1,000万円</dd>
        </div>
        <div className={companyStyle.flexItem}>
          <dt className={companyStyle.dtTitle}>所在地</dt>
          <dd className={companyStyle.ddItem}>〒534-0021<br />大阪市都島区都島本通5丁目15番3号<br />06-6925-6555（代表）</dd>
        </div>
        <div className={companyStyle.flexItem}>
          <dt className={companyStyle.dtTitle}>代表者名</dt>
          <dd className={companyStyle.ddItem}>代表取締役　西村保宏</dd>
        </div>
        <div className={companyStyle.flexItem}>
          <dt className={companyStyle.dtTitle}>資本金</dt>
          <dd className={companyStyle.ddItem}>1,000万円</dd>
        </div>
        <div className={companyStyle.flexItem}>
          <dt className={companyStyle.dtTitle}>営業種目</dt>
          <dd className={companyStyle.ddItem}>オフセット印刷　他</dd>
        </div>
        <div className={companyStyle.flexItem}>
          <dt className={companyStyle.dtTitle}>役員名</dt>
          <dd className={companyStyle.ddItem}>代表取締役　西村保宏<br />取締役　西村紀男　　取締役　西村圭子</dd>
        </div>
        <div className={companyStyle.flexItem}>
          <dt className={companyStyle.dtTitle}>年間取引高</dt>
          <dd className={companyStyle.ddItem}>30,000万円</dd>
        </div>
        <div className={companyStyle.flexItem}>
          <dt className={companyStyle.dtTitle}>取引先【官庁】</dt>
          <dd className={companyStyle.ddItem}>大阪府庁、大阪市、吹田市、茨木市、高槻市、池田市、豊中市、箕面市、伊丹市、川西市、大東市、四條畷市、門真市、守口市、寝屋川市、摂津市、大阪市水道局、大阪市建設局、近畿郵政局、阪神高速道路公団、高知県大阪事務所</dd>
        </div>
        <div className={companyStyle.flexItem}>
          <dt className={companyStyle.dtTitle}>取引先【法人】</dt>
          <dd className={companyStyle.ddItem}>大阪府医師会、大阪府病院協会、大阪府計量協会、大阪成人病予防協会、生野区医師会、中央区南医師会、北区医師会、旭区医師会、都島区医師会、港区医師会、門真市医師会、豊中市医師会、岸和田市医師会、枚方市医師会、大阪弁護士会、法曹同士会、DMG森精機㍿、㍿ワオ・コーポレーション（能開センター）、関西テレビ放送株式会社、ダイシン工業㍿、㍿大通、大阪市立総合医療センター、東大阪病院、愛仁会本部、和田精密歯研㍿</dd>
        </div>
        <div className={companyStyle.flexItem}>
          <dt className={companyStyle.dtTitle}>取引先【教育機関】</dt>
          <dd className={companyStyle.ddItem}>関西大学、関西医科大学、摂南大学、大阪工業大学、関西医大附属看護専門学校、医師会看護専門学校、日本歯科・医療学院専門学校、大阪IT会計専門学校、大阪外語専門学校、モード学園、大阪医専、コンピュータ総合学院HAL、東京アカデミー、淀川工業高校、高津高校、市岡高校、清水谷高校、茨田高校、市立伊丹高校、常翔学園、夕陽ヶ丘学園・短期大学部、名古屋女子大学・短期大学部</dd>
        </div>
        <div className={companyStyle.flexItem}>
          <dt className={companyStyle.dtTitle}>主な仕入れ先</dt>
          <dd className={companyStyle.ddItem}>晃和紙業株式会社、佐々木洋紙㍿、ミズグチ紙商事㍿、吉川紙商事㍿、㍿ペーパル、ハート株式会社、フジックス㍿、㍿キングコーポレーション、㍿山櫻</dd>
        </div>
        <div className={companyStyle.flexItem}>
          <dt className={companyStyle.dtTitle}>従業員数</dt>
          <dd className={companyStyle.ddItem}>男／17名　女子／4名　計／21名</dd>
        </div>
        <div className={companyStyle.flexItem}>
          <dt className={companyStyle.dtTitle}>社屋</dt>
          <dd className={companyStyle.ddItem}>構造／鉄筋コンクリート5階建<br />（地下1階）</dd>
          <dd className={companyStyle.ddItem}>敷地／335平方米</dd>
          <dd className={companyStyle.ddItem}>建坪／1,301平方米</dd>
        </div>
        <div className={companyStyle.flexItem}>
          <dt className={companyStyle.dtTitle}>設備器具</dt>
          <dd className={companyStyle.ddItem}></dd>
          <dd className={companyStyle.ddItem}>RYOBI ダイレクトイメージオフセット印刷機4色（菊4裁）／1台</dd>
          <dd className={companyStyle.ddItem}>KOMORI 高速自動オフセット印刷機（菊半裁）／1台</dd>
          <dd className={companyStyle.ddItem}>RYOBI 520Xオフセット印刷機（菊4裁）／1台</dd>
          <dd className={companyStyle.ddItem}>RYOBI 3300CRオフセット印刷機（菊4裁）／1台</dd>
          <dd className={companyStyle.ddItem}>ハマダスター 両面自動印刷機（A3・B4版）／2台</dd>
          <dd className={companyStyle.ddItem}>TOKO 8000オフセット印刷機（名刺・ハガキ）／1台</dd>
          <dd className={companyStyle.ddItem}>SCREEN PlateRite 8300S（自動製版機)／1台</dd>
          <dd className={companyStyle.ddItem}>富士フィルム LP-940HⅡ（自動現像機）／1台</dd>
          <dd className={companyStyle.ddItem}>富士フィルム 900N-900D（自動現像機)／1台</dd>
          <dd className={companyStyle.ddItem}>富士フィルム エルプ404V型（自動製版機)／1台</dd>
          <dd className={companyStyle.ddItem}>IWATSU ElefaxIP551R（自動製版機）／2台</dd>
          <dd className={companyStyle.ddItem}>ホリゾン中綴じ機 SPF-10Ⅱ・FC-10Ⅱ ／1台</dd>
          <dd className={companyStyle.ddItem}>ホリゾン 自動丁合機VAC-1000／5連</dd>
          <dd className={companyStyle.ddItem}>ホリゾン 自動無線綴機BQ-480／1台</dd>
          <dd className={companyStyle.ddItem}>ウチダテクノ 自動クロス巻き機MX-240／1台</dd>
          <dd className={companyStyle.ddItem}>製本自動紙折り機／1台</dd>
          <dd className={companyStyle.ddItem}>大型電動高速断裁機／2台</dd>
          <dd className={companyStyle.ddItem}>大型電動針綴機／1台</dd>
          <dd className={companyStyle.ddItem}>富士ゼロックス カラーコピー／1台</dd>
          <dd className={companyStyle.ddItem}>Canon複合機IR-ADVC2220F／1台</dd>
          <dd className={companyStyle.ddItem}>エプソン カラープロッター MAXART PX-9550／1台</dd>
          <dd className={companyStyle.ddItem}>アップル　マッキントッシュ／6台</dd>
          <dd className={companyStyle.ddItem}>WINDOWS　PC／10台</dd>
        </div>
        <div className={companyStyle.flexItem}>
          <dt className={companyStyle.dtTitle}>車両</dt>
          <dd className={companyStyle.ddItem}>トヨタ　コロナ乗用車／1輛</dd>
          <dd className={companyStyle.ddItem}>スズキ　エブリィ／4輛</dd>
          <dd className={companyStyle.ddItem}>スズキ　キャリー／1輛</dd>
          <dd className={companyStyle.ddItem}>トヨタ　フォークリフト／1輛</dd>
        </div>
      </dl>
    </Layout>
  )
}
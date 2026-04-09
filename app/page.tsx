export default function Home() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;600;700&family=Noto+Sans+JP:wght@400;500;700&display=swap');
:root {
  --teal: #00C9BE;
  --teal-dark: #00A89E;
  --teal-light: #e0fafa;
  --teal-pale: #f0fefe;
  --dark: #00796B;
  --text: #1a2e2b;
  --text-mid: #4a6a65;
  --text-light: #8aa5a0;
  --white: #ffffff;
  --off: #f5fefe;
  --border: #b2e8e5;
}
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { font-family: 'Noto Sans JP', sans-serif; color: var(--text); background: var(--white); }
        .topbar { background: var(--teal); padding: 4px 40px; display: flex; justify-content: flex-end; align-items: center; gap: 20px; }
        .topbar-text { font-size: 11px; color: rgba(255,255,255,0.85); }
        .topbar-tel { font-size: 16px; font-weight: 700; color: white; }
        .nav { display: flex; justify-content: space-between; align-items: center; padding: 0 40px; height: 60px; border-bottom: 1px solid var(--border); background: var(--white); position: sticky; top: 0; z-index: 100; }
        .nav-logo-box { background: var(--teal); width: 44px; height: 44px; border-radius: 6px; display: flex; align-items: center; justify-content: center; }
        .nav-logo-text { font-family: 'Cormorant Garamond', serif; font-size: 20px; font-weight: 700; color: var(--teal-dark); margin-left: 10px; }
        .nav-links { display: flex; gap: 20px; align-items: center; }
        .nav-links a { font-size: 12px; color: var(--text-mid); text-decoration: none; }
        .nav-cta { background: var(--teal); color: white !important; padding: 8px 18px; border-radius: 4px; font-weight: 700; }
        .fv { position: relative; height: 560px; overflow: hidden; background: #0d2622; display: flex; align-items: flex-end; }
        .fv-overlay { position: absolute; inset: 0; background: linear-gradient(to right, rgba(10,31,29,0.85) 40%, rgba(10,31,29,0.3) 100%); z-index: 1; }
       .fv-bg { position: absolute; inset: 0; background: linear-gradient(120deg, #00796B 0%, #00A89E 50%, #00C9BE 100%); }
        .fv-content { position: relative; z-index: 2; padding: 0 40px 56px; width: 100%; }
        .fv-badge { display: inline-block; background: rgba(0,184,164,0.15); border: 1px solid rgba(0,184,164,0.5); color: #4dd9cc; font-size: 10px; letter-spacing: 0.15em; padding: 4px 14px; border-radius: 2px; margin-bottom: 18px; text-transform: uppercase; }
        .fv-title { font-family: 'Cormorant Garamond', serif; font-size: 62px; font-weight: 700; color: white; line-height: 1.05; margin-bottom: 14px; }
        .fv-title em { color: var(--teal); font-style: normal; }
        .fv-sub { font-size: 13px; color: rgba(255,255,255,0.65); line-height: 1.8; max-width: 500px; margin-bottom: 28px; }
        .fv-specs { display: flex; gap: 24px; flex-wrap: wrap; margin-bottom: 32px; }
        .fv-spec { display: flex; align-items: center; gap: 8px; }
        .fv-spec-dot { width: 6px; height: 6px; background: var(--teal); border-radius: 50%; }
        .fv-spec-text { font-size: 12px; color: rgba(255,255,255,0.7); }
        .fv-spec-text strong { color: white; font-weight: 700; }
        .fv-btns { display: flex; gap: 12px; }
        .btn-main { background: var(--teal); color: white; padding: 13px 28px; border-radius: 4px; font-size: 13px; font-weight: 700; text-decoration: none; }
        .btn-outline { background: transparent; color: white; padding: 12px 28px; border-radius: 4px; font-size: 13px; text-decoration: none; border: 1px solid rgba(255,255,255,0.35); }
        section { padding: 72px 40px; }
        .sec-label { font-size: 11px; letter-spacing: 0.15em; text-transform: uppercase; color: var(--teal); font-weight: 700; margin-bottom: 8px; display: flex; align-items: center; gap: 10px; }
        .sec-label::after { content: ''; display: inline-block; width: 40px; height: 1px; background: var(--teal); opacity: 0.5; }
        .sec-title { font-size: 32px; font-weight: 700; color: var(--text); line-height: 1.3; margin-bottom: 14px; }
        .sec-lead { font-size: 14px; color: var(--text-mid); line-height: 1.85; max-width: 600px; }
        .story-inner { display: grid; grid-template-columns: 1fr 1fr; gap: 60px; align-items: center; max-width: 1080px; margin: 0 auto; }
        .story-card { background: var(--dark); border-radius: 10px; padding: 36px; color: white; position: relative; overflow: hidden; }
        .story-card-lbl { font-size: 10px; letter-spacing: 0.15em; color: var(--teal); text-transform: uppercase; margin-bottom: 18px; }
        .story-card-body { font-size: 15px; line-height: 1.9; color: rgba(255,255,255,0.82); }
        .story-card-accent { background: rgba(0,184,164,0.12); border-left: 3px solid var(--teal); padding: 14px 16px; margin-top: 22px; border-radius: 0 6px 6px 0; }
        .story-card-accent p { font-size: 12px; color: rgba(255,255,255,0.65); line-height: 1.7; }
        .story-features { display: flex; flex-direction: column; gap: 20px; margin-top: 28px; }
        .story-feature { display: flex; gap: 14px; align-items: flex-start; padding: 18px 20px; background: white; border-radius: 8px; border: 1px solid var(--border); }
        .story-feature h4 { font-size: 13px; font-weight: 700; color: var(--text); margin-bottom: 4px; }
        .story-feature p { font-size: 12px; color: var(--text-mid); line-height: 1.65; }
        .concerns-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; margin-top: 44px; max-width: 1080px; margin-left: auto; margin-right: auto; }
        .concern-card { border: 1px solid var(--border); border-radius: 8px; padding: 24px; position: relative; overflow: hidden; background: white; }
        .concern-card::before { content: ''; position: absolute; top: 0; left: 0; right: 0; height: 3px; background: linear-gradient(90deg, var(--teal), #4dd9cc); }
        .concern-num { font-family: 'Cormorant Garamond', serif; font-size: 44px; font-weight: 700; color: var(--teal-light); line-height: 1; margin-bottom: 10px; }
        .concern-q { font-size: 13px; font-weight: 700; color: var(--text); margin-bottom: 10px; line-height: 1.5; }
        .concern-a { font-size: 12px; color: var(--text-mid); line-height: 1.7; }
        .vr-why { background: linear-gradient(135deg, #005c52 0%, #007a6e 100%); }
        .vr-why-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; margin-top: 44px; max-width: 1080px; margin-left: auto; margin-right: auto; }
        .vr-card { background: rgba(255,255,255,0.08); border: 1px solid rgba(255,255,255,0.15); border-radius: 8px; padding: 28px; }
        .vr-card-tag { display: inline-block; background: rgba(255,255,255,0.12); color: rgba(255,255,255,0.8); font-size: 10px; padding: 3px 10px; border-radius: 2px; letter-spacing: 0.1em; margin-bottom: 10px; }
        .vr-card h3 { font-size: 17px; font-weight: 700; color: white; margin-bottom: 12px; }
        .vr-card p { font-size: 13px; color: rgba(255,255,255,0.65); line-height: 1.8; }
        .curriculum-inner { max-width: 880px; margin: 0 auto; }
        .curriculum-table { margin-top: 44px; border: 1px solid var(--border); border-radius: 8px; overflow: hidden; }
        .curriculum-row { display: grid; grid-template-columns: 180px 1fr; border-bottom: 1px solid var(--border); }
        .curriculum-row:last-child { border-bottom: none; }
        .curriculum-cell-label { background: var(--teal-pale); padding: 18px 20px; font-size: 13px; font-weight: 700; color: var(--teal-dark); border-right: 1px solid var(--border); display: flex; align-items: center; }
        .curriculum-cell-content { padding: 18px 22px; font-size: 13px; color: var(--text-mid); line-height: 1.7; background: white; }
        .curriculum-cell-content strong { color: var(--text); font-weight: 700; display: block; margin-bottom: 2px; }
        .cases-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; margin-top: 44px; max-width: 1080px; margin-left: auto; margin-right: auto; }
        .case-card { border: 1px solid var(--border); border-radius: 8px; overflow: hidden; background: white; }
        .case-img { height: 150px; background: var(--teal-light); display: flex; align-items: center; justify-content: center; }
        .case-img-lbl { color: var(--teal-dark); font-size: 11px; }
        .case-body { padding: 18px 20px; }
        .case-tag { font-size: 10px; background: var(--teal-light); color: var(--teal-dark); padding: 3px 10px; border-radius: 20px; font-weight: 700; border: 1px solid var(--border); }
        .case-title { font-size: 13px; font-weight: 700; color: var(--text); margin: 10px 0 6px; line-height: 1.5; }
        .case-meta { font-size: 11px; color: var(--text-light); }
        .flow-steps { display: flex; margin-top: 44px; max-width: 940px; margin-left: auto; margin-right: auto; }
        .flow-step { flex: 1; text-align: center; position: relative; }
        .flow-connector { position: absolute; top: 22px; left: 50%; right: -50%; height: 2px; background: var(--teal-light); z-index: 0; }
        .flow-step:last-child .flow-connector { display: none; }
        .flow-step-num { width: 44px; height: 44px; background: var(--teal); border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 15px; font-weight: 700; color: white; margin: 0 auto 14px; position: relative; z-index: 1; }
        .flow-step-title { font-size: 13px; font-weight: 700; color: var(--text); margin-bottom: 6px; }
        .flow-step-desc { font-size: 11px; color: var(--text-mid); line-height: 1.6; padding: 0 6px; }
        .faq-inner { max-width: 700px; margin: 0 auto; }
        .faq-item { border-bottom: 1px solid var(--border); padding: 22px 0; }
        .faq-q { font-size: 14px; font-weight: 700; color: var(--text); margin-bottom: 10px; display: flex; align-items: flex-start; gap: 10px; }
        .faq-q-badge { background: var(--teal); color: white; width: 22px; height: 22px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 11px; font-weight: 700; flex-shrink: 0; margin-top: 1px; }
        .faq-a { font-size: 13px; color: var(--text-mid); line-height: 1.8; padding-left: 32px; }
        .cta { background: linear-gradient(rgba(0,60,55,0.8), rgba(0,40,36,0.85)), linear-gradient(135deg, #005c52, #00786e); text-align: center; padding: 72px 40px; }
        .cta-btns { display: flex; justify-content: center; gap: 14px; flex-wrap: wrap; margin-top: 36px; }
        .btn-dl { background: white; color: var(--teal-dark); padding: 13px 30px; border-radius: 4px; font-size: 13px; font-weight: 700; text-decoration: none; }
        .btn-contact { background: var(--teal); color: white; padding: 13px 30px; border-radius: 4px; font-size: 13px; font-weight: 700; text-decoration: none; }
        .footer { background: linear-gradient(135deg, var(--teal) 0%, #00d4bc 60%, #c8e000 100%); padding: 56px 40px 32px; }
        .footer-inner { max-width: 1080px; margin: 0 auto; }
        .footer-logo { font-family: 'Cormorant Garamond', serif; font-size: 28px; font-weight: 700; color: white; margin-bottom: 8px; }
        .footer-bottom { border-top: 1px solid rgba(255,255,255,0.2); padding-top: 20px; font-size: 11px; color: rgba(255,255,255,0.6); text-align: center; margin-top: 40px; }
      `}</style>

      {/* TOP BAR */}
      <div className="topbar">
        <span className="topbar-text">お気軽にお問い合わせください</span>
        <span className="topbar-tel">☎ 03-6823-3856</span>
      </div>

      {/* NAV */}
      <nav className="nav">
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <div className="nav-logo-box">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="white"><path d="M12 2C8 2 4 5 4 9c0 5 8 13 8 13s8-8 8-13c0-4-4-7-8-7zm0 9.5c-1.4 0-2.5-1.1-2.5-2.5S10.6 6.5 12 6.5 14.5 7.6 14.5 9 13.4 11.5 12 11.5z" /></svg>
          </div>
          <span className="nav-logo-text">Teamie</span>
        </div>
        <div className="nav-links">
          <a href="#">代表挨拶</a>
          <a href="#">会社概要</a>
          <a href="#">サービス内容</a>
          <a href="#">導入実績</a>
          <a href="#">ブログ</a>
          <a href="#">お問い合わせ</a>
          <a href="#" className="nav-cta">資料DL</a>
        </div>
      </nav>

      {/* FV */}
      <div className="fv">
        <div className="fv-bg"></div>
        <div className="fv-overlay"></div>
        <div className="fv-content">
          <div className="fv-badge">VR Team Building</div>
          <h1 className="fv-title">Hotel<br /><em>Homicide</em></h1>
          <p className="fv-sub">VRの世界に潜む殺人事件を、チームで解き明かせ。<br />没入感と対話が生む、圧倒的なチームビルディング体験。</p>
          <div className="fv-specs">
            <div className="fv-spec"><div className="fv-spec-dot"></div><div className="fv-spec-text"><strong>2〜4時間</strong> 実施時間</div></div>
            <div className="fv-spec"><div className="fv-spec-dot"></div><div className="fv-spec-text"><strong>6〜300名</strong> 参加人数</div></div>
            <div className="fv-spec"><div className="fv-spec-dot"></div><div className="fv-spec-text"><strong>屋内</strong> 実施場所</div></div>
            <div className="fv-spec"><div className="fv-spec-dot"></div><div className="fv-spec-text"><strong>日本語・英語</strong> 対応言語</div></div>
          </div>
          <div className="fv-btns">
            <a href="#" className="btn-main">資料をダウンロード</a>
            <a href="#" className="btn-outline">お問い合わせ</a>
          </div>
        </div>
      </div>

      {/* STORY */}
      <section style={{ background: 'var(--off)' }}>
        <div className="story-inner">
          <div className="story-card">
            <div className="story-card-lbl">— The Story</div>
            <div className="story-card-body">
              アムステルダムのホテルで開催された料理コンテスト。<br />
              初日の夜、ホテルのオーナーが何者かに殺害された。<br /><br />
              容疑者は4名。あなたたちに捜査協力の依頼が届く——
            </div>
            <div className="story-card-accent">
              <p>VRの世界の証拠品と、警察から得た情報をコミュニケーションで繋ぎ、チームで真犯人を解明せよ。</p>
            </div>
          </div>
          <div>
            <div className="sec-label">Hotel Homicideとは</div>
            <h2 className="sec-title">VR没入型謎解き<br />チームビルディング</h2>
            <p className="sec-lead">完了率60%という難易度と時間制限が生む緊張感の中、チームで協力して殺人事件を解明するVRアクティビティです。</p>
            <div className="story-features">
              <div className="story-feature"><div><h4>時間を忘れる没入体験</h4><p>VRによる圧倒的な世界観でメンバー間の距離が劇的に縮まり、コミュニケーション量が格段に上がります。</p></div></div>
              <div className="story-feature"><div><h4>最短2時間で実施可能</h4><p>どのような場面でも実施がしやすく、気軽にチームビルディングができます。WSの追加カスタマイズも可能。</p></div></div>
              <div className="story-feature"><div><h4>フラットな対話が生まれる</h4><p>役職・年次に関係なく全員の情報が必要な設計で、「フラットなコミュニケーション」を強制的に発生させます。</p></div></div>
            </div>
          </div>
        </div>
      </section>

      {/* CONCERNS */}
      <section style={{ background: 'white' }}>
        <div style={{ maxWidth: '1080px', margin: '0 auto' }}>
          <div className="sec-label">こんなお悩みを解決できます</div>
          <h2 className="sec-title">チームの「壁」を、VRで壊す。</h2>
          <div className="concerns-grid">
            <div className="concern-card"><div className="concern-num">01</div><div className="concern-q">部門間や上下間の「心理的・物理的な壁」を壊したい</div><div className="concern-a">全員が発言せざるを得ない設計により、役職や年次に関係なく「フラットなコミュニケーション」を強制的に発生させます。</div></div>
            <div className="concern-card"><div className="concern-num">02</div><div className="concern-q">形式的な会議ではなく「目的意識を持った対話」を定着させたい</div><div className="concern-a">断片的な情報の統合と合意形成のプロセスは、ビジネスにおける会議の流れそのもの。楽しみながら体感できます。</div></div>
            <div className="concern-card"><div className="concern-num">03</div><div className="concern-q">希薄化した「相互信頼・一体感」を短期間で構築したい</div><div className="concern-a">「犯人を見つける」共通の強い目的が短時間で「共闘関係」を築きます。相手の意外な鋭さが相互尊重のきっかけに。</div></div>
          </div>
        </div>
      </section>

      {/* VR WHY */}
      <section className="vr-why" style={{ padding: '72px 40px' }}>
        <div style={{ maxWidth: '1080px', margin: '0 auto' }}>
          <div className="sec-label" style={{ color: 'rgba(255,255,255,0.7)' }}>科学的根拠</div>
          <h2 className="sec-title" style={{ color: 'white' }}>VRがなぜ有効なのか</h2>
          <p className="sec-lead" style={{ color: 'rgba(255,255,255,0.65)' }}>単なるゲームではありません。VRには、チームビルディングを加速させる科学的なメカニズムがあります。</p>
          <div className="vr-why-grid">
            <div className="vr-card"><div className="vr-card-tag">Unmasking</div><h3>心理的仮面の解除</h3><p>VRという非日常空間では、社会的地位や年齢という「仮面」が機能しません。ゲームという目的のために人は無意識に素の自分をさらけ出し、本音の対話の土台となります。</p></div>
            <div className="vr-card"><div className="vr-card-tag">Shared Victory</div><h3>成功体験の共有</h3><p>脳はVR内の体験を現実の記憶として処理します。仮想空間でのスリリングな成功体験は、チーム内に「私たちならできる」という強固な効力感を植え付けます。</p></div>
          </div>
        </div>
      </section>

      {/* CURRICULUM */}
      <section style={{ background: 'var(--off)' }}>
        <div className="curriculum-inner">
          <div className="sec-label">プログラムの流れ</div>
          <h2 className="sec-title">カリキュラム</h2>
          <div className="curriculum-table">
            <div className="curriculum-row"><div className="curriculum-cell-label">オープニング</div><div className="curriculum-cell-content"><strong>アイスブレイク・趣旨説明</strong>アクティビティの趣旨とストーリーの背景を説明し、参加者同士の緊張をほぐします。</div></div>
            <div className="curriculum-row"><div className="curriculum-cell-label">VRアクティビティ</div><div className="curriculum-cell-content"><strong>Hotel Homicide 本編</strong>VRの世界で起こった殺人事件をチームで解決します。</div></div>
            <div className="curriculum-row"><div className="curriculum-cell-label">表彰</div><div className="curriculum-cell-content"><strong>順位発表・ステージ解説</strong>クリアタイムを細かく解説し、各チームの取り組みを振り返ります。</div></div>
            <div className="curriculum-row"><div className="curriculum-cell-label">振り返り①</div><div className="curriculum-cell-content"><strong>感情と感想の共有</strong>各ステージ担当メンバー同士で体験を共有し気づきをオープンに発表します。</div></div>
            <div className="curriculum-row"><div className="curriculum-cell-label">振り返り②</div><div className="curriculum-cell-content"><strong>強みのフィードバック</strong>アクティビティ中に発見したメンバーの強みを記入しフィードバックします。</div></div>
            <div className="curriculum-row"><div className="curriculum-cell-label">チェックアウト</div><div className="curriculum-cell-content"><strong>まとめ・継続的なつながりへ</strong>半日の感想と今後のつながりのためのアイデアを共有して締めくくります。</div></div>
          </div>
        </div>
      </section>

      {/* CASES */}
      <section style={{ background: 'white' }}>
        <div style={{ maxWidth: '1080px', margin: '0 auto' }}>
          <div className="sec-label">実績・事例</div>
          <h2 className="sec-title">導入事例</h2>
          <div className="cases-grid">
            <div className="case-card"><div className="case-img"><span className="case-img-lbl">導入事例 画像</span></div><div className="case-body"><span className="case-tag">大手企業</span><div className="case-title">部門横断のコミュニケーション改善に活用</div><div className="case-meta">参加人数：50名 ／ 実施時間：3時間</div></div></div>
            <div className="case-card"><div className="case-img"><span className="case-img-lbl">導入事例 画像</span></div><div className="case-body"><span className="case-tag">新卒研修</span><div className="case-title">入社研修での一体感づくりに導入</div><div className="case-meta">参加人数：120名 ／ 実施時間：4時間</div></div></div>
            <div className="case-card"><div className="case-img"><span className="case-img-lbl">導入事例 画像</span></div><div className="case-body"><span className="case-tag">管理職研修</span><div className="case-title">リーダー層の合意形成力向上に活用</div><div className="case-meta">参加人数：30名 ／ 実施時間：2時間</div></div></div>
          </div>
          <div style={{ textAlign: 'center', marginTop: '36px' }}><a href="#" style={{ display: 'inline-block', border: '2px solid var(--teal)', color: 'var(--teal)', padding: '12px 48px', borderRadius: '40px', fontSize: '13px', fontWeight: '700', textDecoration: 'none' }}>もっと見る</a></div>
        </div>
      </section>

      {/* FLOW */}
      <section style={{ background: 'white' }}>
        <div style={{ maxWidth: '940px', margin: '0 auto' }}>
          <div className="sec-label">ご利用の流れ</div>
          <h2 className="sec-title">導入までの流れ</h2>
          <div className="flow-steps">
            <div className="flow-step"><div className="flow-connector"></div><div className="flow-step-num">01</div><div className="flow-step-title">お問い合わせ</div><div className="flow-step-desc">フォームよりお気軽にご連絡ください</div></div>
            <div className="flow-step"><div className="flow-connector"></div><div className="flow-step-num">02</div><div className="flow-step-title">ヒアリング</div><div className="flow-step-desc">目的・人数・日程などをお聞かせください</div></div>
            <div className="flow-step"><div className="flow-connector"></div><div className="flow-step-num">03</div><div className="flow-step-title">企画・お見積り</div><div className="flow-step-desc">ご要望に合わせてご提案・見積もりを提出</div></div>
            <div className="flow-step"><div className="flow-connector"></div><div className="flow-step-num">04</div><div className="flow-step-title">実施準備</div><div className="flow-step-desc">当日の内容や準備物を最終調整いたします</div></div>
            <div className="flow-step"><div className="flow-step-num">05</div><div className="flow-step-title">当日実施</div><div className="flow-step-desc">ファシリテーターが当日をサポートします</div></div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ background: 'var(--off)' }}>
        <div className="faq-inner">
          <div className="sec-label">よくあるご質問</div>
          <h2 className="sec-title">FAQ</h2>
          <div style={{ marginTop: '36px' }}>
            <div className="faq-item"><div className="faq-q"><span className="faq-q-badge">Q</span>開催できる最低人数・最大人数を教えてください</div><div className="faq-a">最低人数は6名、最大人数は300名程度まで実施可能です。1グループ4〜5名での編成を推奨しています。</div></div>
            <div className="faq-item"><div className="faq-q"><span className="faq-q-badge">Q</span>開催に必要な備品は何ですか？</div><div className="faq-a">スクリーン・プロジェクターがあれば基本的にどこでも実施可能です。VRヘッドセットは弊社にてご用意いたします。</div></div>
            <div className="faq-item"><div className="faq-q"><span className="faq-q-badge">Q</span>所要時間はどれくらいですか？</div><div className="faq-a">アクティビティのみ：約2時間／振り返りを含む場合：約3時間</div></div>
            <div className="faq-item"><div className="faq-q"><span className="faq-q-badge">Q</span>はじめてVRを使うメンバーが多いのですが、大丈夫ですか？</div><div className="faq-a">問題ありません。ファシリテーターが丁寧に説明します。VR酔いが起こりにくい仕様です。</div></div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <div className="cta">
        <div style={{ maxWidth: '680px', margin: '0 auto' }}>
          <div className="sec-label" style={{ color: 'rgba(255,255,255,0.7)', justifyContent: 'center' }}>まずはお気軽に</div>
          <h2 className="sec-title" style={{ color: 'white' }}>最先端でワクワクするチームビルディングを<br />するならTeamieへ！</h2>
          <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '14px', lineHeight: '1.7', marginTop: '14px' }}>ご不明な点やカスタマイズのご要望など、何でもお気軽にご相談ください。</p>
          <div className="cta-btns">
            <a href="#" className="btn-dl">Webからお問い合わせ</a>
            <a href="#" className="btn-contact">電話でお問い合わせ</a>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-inner">
          <div className="footer-logo">Teamie</div>
          <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.7)', marginBottom: '8px' }}>株式会社Teamie</p>
          <p style={{ fontSize: '18px', fontWeight: '700', color: 'white' }}>Tel: 03-6823-3856</p>
          <div className="footer-bottom">Copyright © 2021 Teamie. All Rights Reserved.</div>
        </div>
      </footer>
    </>
  );
}
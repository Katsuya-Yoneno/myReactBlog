import '../App.css'

const TimeLine = () => {
    return (
        <>
            <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:ml-[8.75rem] md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 ">
                <h2 className="text-white text-center text-2xl whitespace-nowrap">ざっくりと私のこれまでの人生を書いてみる</h2>
                <div className="relative">
                    <div className="md:flex items-center md:space-x-4 mb-3">
                        <div className="flex items-center space-x-4 md:space-x-2 md:space-x-reverse">
                            {/* icon */}
                            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white shadow md:order-1">
                                <svg
                                    className="fill-emerald-500"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                >
                                    <path d="M8 0a8 8 0 1 0 8 8 8.009 8.009 0 0 0-8-8Zm0 12a4 4 0 1 1 0-8 4 4 0 0 1 0 8Z" />
                                </svg>
                                {/* date */}
                            </div>
                            <time className="font-caveat font-medium text-xl text-white md:w-28">1999-2011</time>
                        </div>
                        {/* title */}
                        <div className="text-slate-200 ml-14">
                            <span className="text-green-200 font-bold font-medium text-xl">爆誕</span>
                        </div>
                        {/* card */}
                    </div>
                    <div className="w-96 bg-white p-4 rounded border border-slate-200 text-slate-500 shadow ml-14 md:ml-44">
                        静岡県沼津市に生を受ける。
                        田舎の山を駆け回りながらすくすく育つ。蟻とか食べてた記憶あり。ばかでかい野犬(?)に追い回されて殺されかけた記憶あり。
                        猪を竹で作った弓矢で追いかけた記憶あり。
                    </div>
                </div>
                <div className="relative">
                    <div className="md:flex items-center md:space-x-4 mb-3">
                        <div className="flex items-center space-x-4 md:space-x-2 md:space-x-reverse">
                            {/* icon */}
                            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white shadow md:order-1">
                                <svg
                                    className="fill-emerald-500"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                >
                                    <path d="M8 0a8 8 0 1 0 8 8 8.009 8.009 0 0 0-8-8Zm0 12a4 4 0 1 1 0-8 4 4 0 0 1 0 8Z" />
                                </svg>
                                {/* date */}
                            </div>
                            <time className="font-caveat font-medium text-xl text-white md:w-28">2012-2014</time>
                        </div>
                        {/* title */}
                        <div className="text-slate-200 ml-14">
                            <span className="text-green-200 font-bold font-medium text-xl">絶望の中学生活</span>
                        </div>
                        {/* card */}
                    </div>
                    <div className="w-96 bg-white p-4 rounded border border-slate-200 text-slate-500 shadow ml-14 md:ml-44">
                        入部したサッカー部が不良の巣窟だった。逆らえば武力行使。集団リンチされてちょっと鼻が曲がった記憶あり。
                        強くなると誓うと共に不良たちと同じ道は歩むまいと勉学に勤しみ始める。
                    </div>
                </div>
                <div className="relative">
                    <div className="md:flex items-center md:space-x-4 mb-3">
                        <div className="flex items-center space-x-4 md:space-x-2 md:space-x-reverse">
                            {/* icon */}
                            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white shadow md:order-1">
                                <svg
                                    className="fill-emerald-500"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                >
                                    <path d="M8 0a8 8 0 1 0 8 8 8.009 8.009 0 0 0-8-8Zm0 12a4 4 0 1 1 0-8 4 4 0 0 1 0 8Z" />
                                </svg>
                                {/* date */}
                            </div>
                            <time className="font-caveat font-medium text-xl text-white md:w-28">2015-2017</time>
                        </div>
                        {/* title */}
                        <div className="text-slate-200 ml-14">
                            <span className="text-green-200 font-bold font-medium text-xl whitespace-nowrap">自称進学校での生活</span>
                        </div>
                        {/* card */}
                    </div>
                    <div className="w-96 bg-white p-4 rounded border border-slate-200 text-slate-500 shadow ml-14 md:ml-44">
                        なんとか高校受験をパスし、無事自称進学校に進学。強くなるという誓いを胸に空手部へ入部。ここでも先輩の中段蹴りで気を失いかけるという
                        記憶あり。理不尽はなく楽しかった。自称進学校あるあるの文武両道・国公立進学主義を十二分に味わう。
                        中学で燃え尽きたため勉強はあまりせず案の定大学受験に失敗。
                    </div>
                </div>
                <div className="relative">
                    <div className="md:flex items-center md:space-x-4 mb-3">
                        <div className="flex items-center space-x-4 md:space-x-2 md:space-x-reverse">
                            {/* icon */}
                            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white shadow md:order-1">
                                <svg
                                    className="fill-emerald-500"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                >
                                    <path d="M8 0a8 8 0 1 0 8 8 8.009 8.009 0 0 0-8-8Zm0 12a4 4 0 1 1 0-8 4 4 0 0 1 0 8Z" />
                                </svg>
                                {/* date */}
                            </div>
                            <time className="font-caveat font-medium text-xl text-white md:w-28">2018-2021</time>
                        </div>
                        {/* title */}
                        <div className="text-slate-200 ml-14">
                            <span className="text-green-200 font-bold font-medium text-xl whitespace-nowrap">大学・東京・コロナ・人生</span>
                        </div>
                        {/* card */}
                    </div>
                    <div className="w-96 bg-white p-4 rounded border border-slate-200 text-slate-500 shadow ml-14 md:ml-44">
                        法政大学経営学部に進学。憧れの東京生活を開始。とにかくいろんな経験をしてみようとただ走る。
                        お酒、人間の怖さを十分味わう。
                        特にやりたいこともなく無気力に適当に暮らす毎日。とりあえず留学に行くもコロナに重なり強制帰国。
                        仕方なく就活をする中で人生について考える。当時趣味でいじっていたJSのシューティングゲームやPythonのデータ収集
                        自動化ツールの開発が楽しかったため「エンジニアいいなあ」とか思いながらIT業界を志す。
                    </div>
                </div>
                <div className="relative">
                    <div className="md:flex items-center md:space-x-4 mb-3">
                        <div className="flex items-center space-x-4 md:space-x-2 md:space-x-reverse">
                            {/* icon */}
                            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white shadow md:order-1">
                                <svg
                                    className="fill-emerald-500"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                >
                                    <path d="M8 0a8 8 0 1 0 8 8 8.009 8.009 0 0 0-8-8Zm0 12a4 4 0 1 1 0-8 4 4 0 0 1 0 8Z" />
                                </svg>
                                {/* date */}
                            </div>
                            <time className="font-caveat font-medium text-xl text-white md:w-28">2022-現在</time>
                        </div>
                        {/* title */}
                        <div className="text-slate-200 ml-14">
                            <span className="text-green-200 font-bold font-medium text-xl">いざ、社会へ</span>
                        </div>
                        {/* card */}
                    </div>
                    <div className="w-96 bg-white p-4 rounded border border-slate-200 text-slate-500 shadow ml-14 md:ml-44">
                        なんとか業界でも割とデカめのSIerへ入社。研修の時点で同期の優秀さに圧倒され自己肯定感が地面にめり込む。でも寮生活は
                        楽しく、配属先の上司も全員尊敬できる君子達だったため精神的安全は担保されながら充実した日々。
                        仕事内容は鬼つまらないがお金はたくさんもらえるので文句は言えない。誰かがやりたくないことをやるのが仕事。
                        その積み重ねで成り立っているのが社会。歯車万歳。これからも頑張るぞ。
                    </div>
                </div>
            </div>
        </>
    )
}

export default TimeLine

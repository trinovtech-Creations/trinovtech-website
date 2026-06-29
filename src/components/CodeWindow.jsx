// Stylized terminal/code window — pure presentation, adds a "tech" feel.
export default function CodeWindow() {
  return (
    <div className="code-window">
      <div className="code-window__bar">
        <span className="code-window__dot code-window__dot--r" />
        <span className="code-window__dot code-window__dot--y" />
        <span className="code-window__dot code-window__dot--g" />
        <span className="code-window__file">server.js</span>
      </div>
      <pre className="code-window__body">
<span className="cl"><span className="c-key">import</span> express <span className="c-key">from</span> <span className="c-str">'express'</span></span>
<span className="cl"><span className="c-key">import</span> mongoose <span className="c-key">from</span> <span className="c-str">'mongoose'</span></span>
<span className="cl"></span>
<span className="cl"><span className="c-key">const</span> <span className="c-fn">app</span> = <span className="c-fn">express</span>()</span>
<span className="cl">app.<span className="c-fn">use</span>(express.<span className="c-fn">json</span>())</span>
<span className="cl"></span>
<span className="cl">app.<span className="c-fn">get</span>(<span className="c-str">'/api/health'</span>, (req, res) =&gt; &#123;</span>
<span className="cl">  res.<span className="c-fn">json</span>(&#123; <span className="c-prop">ok</span>: <span className="c-bool">true</span> &#125;)</span>
<span className="cl">&#125;)</span>
<span className="cl"></span>
<span className="cl">app.<span className="c-fn">listen</span>(<span className="c-num">5050</span>, () =&gt; &#123;</span>
<span className="cl">  console.<span className="c-fn">log</span>(<span className="c-str">'✓ API running'</span>)<span className="cursor">▋</span></span>
<span className="cl">&#125;)</span>
      </pre>
    </div>
  )
}

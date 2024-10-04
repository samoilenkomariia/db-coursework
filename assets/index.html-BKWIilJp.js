import{_ as l}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as s,o as d,c,a as n,b as e,d as a,w as o,e as r}from"./app-Do1hCkvj.js";const u={},v=n("h1",{id:"модель-прецедентів",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#модель-прецедентів"},[n("span",null,"Модель прецедентів")])],-1),p=n("p",null,"В цьому файлі необхідно перелічити всі документи, розроблені в проекті та дати посилання на них.",-1),m=n("p",null,[n("em",null,"Модель прецедентів повинна містити загальні оглядові діаграми та специфікації прецедентів.")],-1),b={href:"https://plantuml.com/",target:"_blank",rel:"noopener noreferrer"},_=r(`<p>В markdown-файлі використовується опис діаграми</p><div class="language-markdown line-numbers-mode" data-ext="md" data-title="md"><pre class="language-markdown"><code>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>center</span> <span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>
    border-radius:4px;
    border: 1px solid #cfd7e6;
    box-shadow: 0 1px 3px 0 rgba(89,105,129,.05), 0 1px 1px 0 rgba(0,0,0,.025);
    padding: 1em;<span class="token punctuation">&quot;</span></span>
<span class="token punctuation">&gt;</span></span>

@startuml

<span class="token code keyword">    right header
        &lt;font size=24 color=black&gt;Package: &lt;b&gt;UCD_3.0
    end header</span>

<span class="token code keyword">    title
        &lt;font size=18 color=black&gt;UC_8. Редагувати конфігурацію порталу
        &lt;font size=16 color=black&gt;Діаграма прецедентів
    end title</span>


<span class="token code keyword">    actor &quot;Користувач&quot; as User #eeeeaa</span>
    
<span class="token code keyword">    package UCD_1{
        usecase &quot;&lt;b&gt;UC_1&lt;/b&gt;\\nПереглянути список \\nзвітів&quot; as UC_1 #aaeeaa
    }</span>
    
<span class="token code keyword">    usecase &quot;&lt;b&gt;UC_1.1&lt;/b&gt;\\nЗастосувати фільтр&quot; as UC_1.1
    usecase &quot;&lt;b&gt;UC_1.2&lt;/b&gt;\\nПереглянути метадані \\nзвіту&quot; as UC_1.2  
    usecase &quot;&lt;b&gt;UC_1.2.1&lt;/b&gt;\\nДати оцінку звіту&quot; as UC_1.2.1  
    usecase &quot;&lt;b&gt;UC_1.2.2&lt;/b&gt;\\nПереглянути інформацію \\nпро авторів звіту&quot; as UC_1.2.2</span>
    
<span class="token code keyword">    package UCD_1 {
        usecase &quot;&lt;b&gt;UC_4&lt;/b&gt;\\nВикликати звіт&quot; as UC_4 #aaeeaa
    }</span>
    
<span class="token code keyword">    usecase &quot;&lt;b&gt;UC_1.1.1&lt;/b&gt;\\n Використати \\nпошукові теги&quot; as UC_1.1.1  
    usecase &quot;&lt;b&gt;UC_1.1.2&lt;/b&gt;\\n Використати \\nрядок пошуку&quot; as UC_1.1.2
    usecase &quot;&lt;b&gt;UC_1.1.3&lt;/b&gt;\\n Використати \\nавторів&quot; as UC_1.1.3  </span>
    
    
    
<span class="token code keyword">    User -&gt; UC_1
    UC_1.1 .u.&gt; UC_1 :extends
    UC_1.2 .u.&gt; UC_1 :extends
    UC_4 .d.&gt; UC_1.2 :extends
    UC_1.2 .&gt; UC_1.2 :extends
    UC_1.2.1 .u.&gt; UC_1.2 :extends
    UC_1.2.2 .u.&gt; UC_1.2 :extends
    UC_1 ..&gt; UC_1.2.2 :extends</span>
    
    
<span class="token code keyword">    UC_1.1.1 -u-|&gt; UC_1.1
    UC_1.1.2 -u-|&gt; UC_1.1
    UC_1.1.3 -u-|&gt; UC_1.1</span>
    
<span class="token code keyword">    right footer
        Аналітичний портал. Модель прецедентів.
        НТУУ КПІ ім.І.Сікорського
        Киів-2020
    end footer</span>

@enduml

<span class="token bold"><span class="token punctuation">**</span><span class="token content">Діаграма прецедентів</span><span class="token punctuation">**</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>center</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>яка буде відображена наступним чином</p>`,3),g=n("img",{src:"https://www.plantuml.com/plantuml/svg/ZLNTQXf15BxFKnpCjTliAYK48u7q0NhZNK5MtIHIwvRT5Kf_G6CmlGXDAS50Q4dRl81efTQ_liAPD-etixzQrtOlXfqvPxxlEpypS-HwfkErNZHsTWYVKpyzy-ZCCckMenRaLpYncnwvzTVMeP6dgjsmdSDAmwm-Bpx5O9vQ1rIe54l7JyevRK_jifgr44JDlRhNi3RXwVihUANZyhv6_9N7_8C7F19T7l90dFE4UCfBNeWBqPVBeetbdkYB3yI_UIdQy1dmJ7GtaZnU8U4RO4XmOF2S1q30xrZq5EiO9ETm64Q1-EBzGCogPpkKuJl9oHFHWQ-lyJ93faibrt9ery9dccg36bxwQIAP8lrD9B7bMbNJjIYZibVM2uygnMTDleSMwE4Huhc6cgwANtGGA0YHXId1woSF4RvIwZC3W7PDCs9-5_El4saXrIs48mG4qqcaMYLv9gw0tewmDNqpbB5LDV8xLgMHvLo8Vb9vDyOsqeGQaTIRi0-MikwyuAdeqaOiJKz7swvMueeBLTfvr5_mblsn94GmLBbgowIdS1ifLQVKikS3IPzuWXwVgJ48DM08yVF_NzymRHJ0HjqQGCkWiFWULPVd2ZI4TPcFIQBYwPcCwfvEW3HTe-ooNMEkPBBq85aRm7F_LBzIYoHcBf2yDgY3cIqgBtz1kPFMqln5Eh1UUJZkRcmrjbZpfDK26_msxjrcJJAdU1ZRFKYBZElcHDHX6REjxDjYyXo75KYrvFws95w84zls4Yy4VyI1bFTlNzP7N68suLyhLpEkzSze1dd1ucf9kNEr6F4BV-S7VY1SjVVSaqTphd5Fus_uKns1VhXIpJlYPRpj3lG0oXfxHlmK1MftZZ31K_S7",alt:"uml diagram",loading:"lazy"},null,-1),k=n("p",null,[n("strong",null,"Діаграма прецедентів")],-1);function C(U,y){const t=s("ExternalLinkIcon"),i=s("center");return d(),c("div",null,[v,p,m,n("p",null,[e("Вбудовування зображень діаграм здійснюється з використанням сервісу "),n("a",b,[e("plantuml.com"),a(t)]),e(".")]),_,a(i,{style:{"border-radius":"4px",border:"1px solid #cfd7e6","box-shadow":"0 1px 3px 0 rgba(89,105,129,.05), 0 1px 1px 0 rgba(0,0,0,.025)",padding:"1em"}},{default:o(()=>[g,k]),_:1})])}const w=l(u,[["render",C],["__file","index.html.vue"]]),f=JSON.parse('{"path":"/use%20cases/","title":"Модель прецедентів","lang":"en-US","frontmatter":{"description":"Модель прецедентів В цьому файлі необхідно перелічити всі документи, розроблені в проекті та дати посилання на них. Модель прецедентів повинна містити загальні оглядові діаграми...","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/db-coursework/use%20cases/"}],["meta",{"property":"og:site_name","content":"Система управління проєктами"}],["meta",{"property":"og:title","content":"Модель прецедентів"}],["meta",{"property":"og:description","content":"Модель прецедентів В цьому файлі необхідно перелічити всі документи, розроблені в проекті та дати посилання на них. Модель прецедентів повинна містити загальні оглядові діаграми..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-02-17T18:50:30.000Z"}],["meta",{"property":"article:modified_time","content":"2024-02-17T18:50:30.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Модель прецедентів\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-02-17T18:50:30.000Z\\",\\"author\\":[]}"]]},"headers":[],"git":{"createdTime":1708081508000,"updatedTime":1708195830000,"contributors":[{"name":"Dmytro Zanuda","email":"dmzanuda.work@gmail.com","commits":2}]},"readingTime":{"minutes":1.59,"words":476},"filePathRelative":"use cases/README.md","localizedDate":"February 16, 2024","autoDesc":true}');export{w as comp,f as data};

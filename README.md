# diceBag
Api de rolagem de dados de RPG, futuramente far&aacute; parte de um assistente de montagem de ficha de DnD 5e.</p>

# Documenta&ccedil;&atilde;o
Uma api simples que recebe express&otilde;es de rolagem por requisi&ccedil;&otilde;es em json. Abaixo alguns exemplos:</p>

<p>-Requisi&ccedil;&atilde;o(Rolagem) &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;<br />
{<br />
&nbsp;&nbsp; &nbsp;&quot;value&quot;:&quot;1d20&quot;<br />
}</p>

<p>-Resposta<br />
{<br />
&nbsp; &quot;resp&quot;: {<br />
&nbsp; &nbsp; &quot;expression&quot;: &quot;1d20&quot;,<br />
&nbsp; &nbsp; &quot;results&quot;: [<br />
&nbsp; &nbsp; &nbsp; {<br />
&nbsp; &nbsp; &nbsp; &nbsp; &quot;expression&quot;: &quot;1d20&quot;,<br />
&nbsp; &nbsp; &nbsp; &nbsp; &quot;results&quot;: [<br />
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 18<br />
&nbsp; &nbsp; &nbsp; &nbsp; ],<br />
&nbsp; &nbsp; &nbsp; &nbsp; &quot;result&quot;: 18<br />
&nbsp; &nbsp; &nbsp; }<br />
&nbsp; &nbsp; ],<br />
&nbsp; &nbsp; &quot;result&quot;: 18<br />
&nbsp; }<br />
}</p>

<p>-Requisi&ccedil;&atilde;o(Rolagem com Vantagem)<br />
{<br />
&nbsp;&nbsp; &nbsp;&quot;value&quot;:&quot;1d*20&quot;<br />
}</p>

<p>-Resposta<br />
{<br />
&nbsp; &quot;resp&quot;: {<br />
&nbsp; &nbsp; &quot;expression&quot;: &quot;1d*20&quot;,<br />
&nbsp; &nbsp; &quot;results&quot;: [<br />
&nbsp; &nbsp; &nbsp; {<br />
&nbsp; &nbsp; &nbsp; &nbsp; &quot;expression&quot;: &quot;1d*20&quot;,<br />
&nbsp; &nbsp; &nbsp; &nbsp; &quot;results&quot;: [<br />
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 2,<br />
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 6<br />
&nbsp; &nbsp; &nbsp; &nbsp; ],<br />
&nbsp; &nbsp; &nbsp; &nbsp; &quot;result&quot;: 6<br />
&nbsp; &nbsp; &nbsp; }<br />
&nbsp; &nbsp; ],<br />
&nbsp; &nbsp; &quot;result&quot;: 6<br />
&nbsp; }<br />
}</p>

<p>-Requisi&ccedil;&atilde;o(Rolagem com Desvantagem)<br />
{<br />
&nbsp;&nbsp; &nbsp;&quot;value&quot;:&quot;1d&#39;20&quot;<br />
}</p>

<p>-Resposta<br />
{<br />
&nbsp; &quot;resp&quot;: {<br />
&nbsp; &nbsp; &quot;expression&quot;: &quot;1d&#39;20&quot;,<br />
&nbsp; &nbsp; &quot;results&quot;: [<br />
&nbsp; &nbsp; &nbsp; {<br />
&nbsp; &nbsp; &nbsp; &nbsp; &quot;expression&quot;: &quot;1d&#39;20&quot;,<br />
&nbsp; &nbsp; &nbsp; &nbsp; &quot;results&quot;: [<br />
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 11,<br />
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 9<br />
&nbsp; &nbsp; &nbsp; &nbsp; ],<br />
&nbsp; &nbsp; &nbsp; &nbsp; &quot;result&quot;: 9<br />
&nbsp; &nbsp; &nbsp; }<br />
&nbsp; &nbsp; ],<br />
&nbsp; &nbsp; &quot;result&quot;: 9<br />
&nbsp; }<br />
}</p>

<p>-Requisi&ccedil;&atilde;o(Rolagem com Opera&ccedil;&atilde;o Matem&aacute;tica)<br />
{<br />
&nbsp;&nbsp; &nbsp;&quot;value&quot;:&quot;1d10+6-1&quot;<br />
}</p>

<p>-Resposta<br />
{<br />
&nbsp; &quot;resp&quot;: {<br />
&nbsp; &nbsp; &quot;expression&quot;: &quot;1d10+6-1&quot;,<br />
&nbsp; &nbsp; &quot;results&quot;: [<br />
&nbsp; &nbsp; &nbsp; {<br />
&nbsp; &nbsp; &nbsp; &nbsp; &quot;expression&quot;: &quot;1d10&quot;,<br />
&nbsp; &nbsp; &nbsp; &nbsp; &quot;results&quot;: [<br />
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 10<br />
&nbsp; &nbsp; &nbsp; &nbsp; ],<br />
&nbsp; &nbsp; &nbsp; &nbsp; &quot;result&quot;: 10<br />
&nbsp; &nbsp; &nbsp; },<br />
&nbsp; &nbsp; &nbsp; {<br />
&nbsp; &nbsp; &nbsp; &nbsp; &quot;expression&quot;: &quot;6&quot;,<br />
&nbsp; &nbsp; &nbsp; &nbsp; &quot;results&quot;: [<br />
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 6<br />
&nbsp; &nbsp; &nbsp; &nbsp; ],<br />
&nbsp; &nbsp; &nbsp; &nbsp; &quot;result&quot;: 6<br />
&nbsp; &nbsp; &nbsp; },<br />
&nbsp; &nbsp; &nbsp; {<br />
&nbsp; &nbsp; &nbsp; &nbsp; &quot;expression&quot;: &quot;1&quot;,<br />
&nbsp; &nbsp; &nbsp; &nbsp; &quot;results&quot;: [<br />
&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 1<br />
&nbsp; &nbsp; &nbsp; &nbsp; ],<br />
&nbsp; &nbsp; &nbsp; &nbsp; &quot;result&quot;: 1<br />
&nbsp; &nbsp; &nbsp; }<br />
&nbsp; &nbsp; ],<br />
&nbsp; &nbsp; &quot;result&quot;: 15<br />
&nbsp; }<br />
}<br />
&nbsp;</p>

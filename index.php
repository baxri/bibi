
<script src="bower_components/showdown/dist/showdown.js"></script>

<script src="text/javascript">
var converter = new showdown.Converter(),
    text      = '#hello, markdown!',
    html      = converter.makeHtml(text);
</script>

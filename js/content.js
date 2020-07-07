var origin_url = location.href;
var url_pattern = /^((https|http):\/\/([a-z\.\-]{1,}|)?(\/hc\/ja\/(sections|articles|)\/(.*?|)|))(\-.*?|)(\#.*?|)$/;
var target_url = origin_url.replace(url_pattern, '$1$8');

var rubbish = origin_url.replace(url_pattern, '$7');

if ( rubbish.length > 0 && origin_url != target_url ) {

    console.log('bef: ' + origin_url);
    console.log('aft: ' + target_url);

    location.href = target_url;

}

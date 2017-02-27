var LZUTF8 = require("../../build/production/lzutf8");

var testData = "पूरे दो बरस के बीतने पर फिरौन ने यह स्वप्न देखा, कि वह नील नदी के किनारे पर खड़ा है। 2 और उस नदी में से सात सुन्दर और मोटी मोटी गाथें निकलकर कछार की घास चरने लगीं। 3 और, क्या देखा, कि उनके पीछे और सात गाथें, जो कुरूप और दुर्बल हैं, नदी से निकली; और दूसरी गायोंके निकट नदी के तट पर जा खड़ी हुई। 4 तब थे कुरूप और दुर्बल गाथें उन सात सुन्दर और मोटी मोटी गायोंको खा गई। तब फिरौन जाग उठा। 5 और वह फिर सो गया और दूसरा स्वप्न देखा, कि एक डंठी में से सात मोटी और अच्छी अच्छी बालें निकलीं। 6 और, क्या देखा, कि उनके पीछे सात बालें पतली और पुरवाई से मुरफाई हुई निकलीं। 7 और इन पतली बालोंने उन सातोंमोटी और अन्न से भरी हुई बालोंको निगल लिया। तब फिरौन जागा, और उसे मालूम हुआ कि यह स्वप्न ही या। 8 भोर को फिरौन का मन व्याकुल हुआ; और उस ने मिस्र के सब ज्योतिषियों, और पण्डितोंको बुलवा भेजा; और उनको अपके स्वप्न बताएं; पर उन में से कोई भी उनका फल फिरौन से न कह सहा। 9 तब पिलानेहारोंका प्रधान फिरौन से बोल उठा, कि मेरे अपराध आज मुझे स्मरण आए: 10 जब फिरौन अपके दासोंसे क्रोधित हुआ या, और मुझे और पकानेहारोंके प्रधान को कैद कराके जल्लादोंके प्रधान के घर के बन्दीगृह में डाल दिया या; 11 तब हम दोनोंने, एक ही रात में, अपके अपके होनहार के अनुसार स्वप्न देखा; 12 और वहां हमारे साय एक इब्री जवान या, जो जल्लादोंके प्रधान का दास या; सो हम ने उसको बताया, और उस ने हमारे स्वप्नोंका फल हम से कहा, हम में से एक एक के स्वप्न का फल उस ने बता दिया। 13 और जैसा जैसा फल उस ने हम से कहा या, वैसा की हुआ भी, अर्यात्‌ मुझ को तो मेरा पद फिर मिला, पर वह फांसी पर लटकाया गया। 14 तब फिरौन ने यूसुफ को बुलवा भेजा। और वह फटपट बन्दीगृह से बाहर निकाला गया, और बाल बनवाकर, और वस्त्र बदलकर फिरौन के साम्हने आया। 15 फिरौन ने यूसुफ से कहा, मैं ने एक स्वप्न देखा है, और उसके फल का बतानेवाला कोई भी नहीं; और मैं ने तेरे विषय में सुना है, कि तू स्वप्न सुनते ही उसका फल बता सकता है। 16 यूसुफ ने फिरौन से कहा, मै तो कुछ नहीं जानता : परमेश्वर ही फिरौन के लिथे शुभ वचन देगा। 17 फिर फिरौन यूसुफ से कहने लगा, मै ने अपके स्वप्न में देखा, कि मैं नील नदी के किनारे पर खड़ा हूं 18 फिर, क्या देखा, कि नदी में से सात मोटी और सुन्दर सुन्दर गाथें निकलकर कछार की घास चरने लगी। 19 फिर, क्या देखा, कि उनके पीछे सात और गाथें निकली, जो दुबली, और बहुत कुरूप, और दुर्बल हैं; मै ने तो सारे मिस्र देश में ऐसी कुडौल गाथें कभी नहीं देखीं। 20 और इन दुर्बल और कुडौल गायोंने उन पहली सातोंमोटी मोटी गायोंको खा लिया। 21 और जब वे उनको खा गई तब यह मालूम नहीं होता या कि वे उनको खा गई हैं, क्योंकि वे पहिले की नाई जैसी की तैसी कुडौल रहीं। तब मैं जाग उठा। 22 फिर मैं ने दूसरा स्वप्न देखा, कि एक ही डंठी में सात अच्छी अच्छी और अन्न से भरी हुई बालें निकलीं। 23 फिर, क्या देखता हूं, कि उनके पीछे और सात बालें छूछी छूछी और पतली और पुरवाई से मुरफाई हुई निकलीं। 24 और इन पतली बालोंने उन सात अच्छी अच्छी बालोंको निगल लिया। इसे मैं ने ";

var result = LZUTF8.compress(testData);
var decompressedResult = LZUTF8.decompress(result);

console.log("Uncompressed length: " + LZUTF8.encodeUTF8(testData).length);
console.log("Compressed length: " + result.length);
console.log("Decompressed length: " + LZUTF8.encodeUTF8(decompressedResult).length);
console.log("Compressed correctly: " + (decompressedResult === testData));



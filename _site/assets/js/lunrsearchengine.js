
var documents = [{
    "id": 0,
    "url": "http://localhost:4000/no-bs-ml/404.html",
    "title": "404",
    "body": "404 Page does not exist!Please use the search bar at the top or visit our homepage! "
    }, {
    "id": 1,
    "url": "http://localhost:4000/no-bs-ml/about",
    "title": "About No BS ML",
    "body": "Questions or bug reports?: Head over to our Github repository! Buy me a coffeeThank you for your support! Your donation helps me to maintain and improve No BS ML . Buy me a coffee Documentation"
    }, {
    "id": 2,
    "url": "http://localhost:4000/no-bs-ml/categories",
    "title": "Categories",
    "body": ""
    }, {
    "id": 3,
    "url": "http://localhost:4000/no-bs-ml/",
    "title": "Home",
    "body": "      Featured:                                                                                                                                                                                                           Attention Networks in PyTorch                              :               Tutorial: Multi-layered Recurrent Neural Networks (RNNs) with Long-Short Term Memory (LSTM) units which are deep both spatially and temporally. :                                                                                                                                                                       Joe Hoeller                                13 Dec 2019                                                                                                                                                                                                                                                                                                                                                Intro to Math for Data Science                                                 1 2 3 4 5                                              :               Learning the theoretical background for data science or machine learning can be a daunting experience, as it involves multiple fields of mathematics, and a long. . . :                                                                                                                                                                       Eric Weber                                11 Jan 2018                                                                                                                      All Stories:                                                                                                     About Bundler                         1 2 3 4 5                      :       gem install bundler installs the bundler gem through RubyGems. You only need to install it once - not every time you create a new Jekyll project. Here are some additional. . . :                                                                                               12 May 2018                                                                                                                                    We all wait for summer                         1 2 3 4 5                      :       As I engage in the so-called “bull sessions” around and about the school, I too often find that most college men have a misconception of the purpose of education. Most. . . :                                                                                               12 Jan 2018                                                                                                                                    Tree of Codes              :       The first mass-produced book to deviate from a rectilinear format, at least in the United States, is thought to be this 1863 edition of Red Riding Hood, cut into the. . . :                                                                                               12 Jan 2018                                                                                                                                    Red Riding Hood              :       The first mass-produced book to deviate from a rectilinear format, at least in the United States, is thought to be this 1863 edition of Red Riding Hood, cut into the. . . :                                                                                               12 Jan 2018                                                                                                                                    Press and education              :       Even the press, the classroom, the platform, and the pulpit in many instances do not give us objective and unbiased truths. To save man from the morass of propaganda, in. . . :                                                                                               12 Jan 2018                                            "
    }, {
    "id": 4,
    "url": "http://localhost:4000/no-bs-ml/robots.txt",
    "title": "",
    "body": "      Sitemap: {{ “sitemap. xml”   absolute_url }}   "
    }, {
    "id": 5,
    "url": "http://localhost:4000/no-bs-ml/attention-networks-in-pytorch/",
    "title": "Attention Networks in PyTorch",
    "body": "2019/12/13 - Tutorial: Multi-layered Recurrent Neural Networks (RNNs) with Long-Short Term Memory (LSTM) units which are deep both spatially and temporally. (a) Attention mechanism: The Convolutional Neural Network (GoogLeNet) takes a video frame as its input and produces a feature cube which has features from different spatial locations. The mechanism then computes xt, the current input for the model, as a dot product of the feature cube and the location softmax lt obtained as shown in (b). Notation and further details are explained in the paper. (b) Recurrent model: At each time-step t, our recurrent neural network (RNN) takes a feature slice xt, generated by the attention mechanism, as the input. It then propagates xt through three layers of Long Short-Term Memory (LSTM) units and predicts the next location probabilities lt+1 and the class label yt. Check out the paper for further details. Encoder Decoder model for Sequence to Sequence modelingSo how do we do Attn nets in Python?: 1234567891011121314151617181920212223import torchimport torch. nn as nnfrom torch import optimimport torch. nn. functional as Ffrom torch. autograd import Variableclass Encoder(nn. Module): def __init__(self, input_size, hidden_size, bidirectional = True):  super(Encoder, self). __init__()  self. hidden_size = hidden_size  self. input_size = input_size  self. bidirectional = bidirectional    self. lstm = nn. LSTM(input_size, hidden_size, bidirectional = bidirectional)  def forward(self, inputs, hidden):    output, hidden = self. lstm(inputs. view(1, 1, self. input_size), hidden)  return output, hidden   def init_hidden(self):  return (torch. zeros(1 + int(self. bidirectional), 1, self. hidden_size),   torch. zeros(1 + int(self. bidirectional), 1, self. hidden_size))"
    }, {
    "id": 6,
    "url": "http://localhost:4000/no-bs-ml/about-bundler/",
    "title": "About Bundler",
    "body": "2018/05/12 - gem install bundler installs the bundler gem through RubyGems. You only need to install it once - not every time you create a new Jekyll project. Here are some additional details: bundler is a gem that manages other Ruby gems. It makes sure your gems and gem versions are compatible, and that you have all necessary dependencies each gem requires. The Gemfile and Gemfile. lock files inform Bundler about the gem requirements in your site. If your site doesn’t have these Gemfiles, you can omit bundle exec and just run jekyll serve. When you run bundle exec jekyll serve, Bundler uses the gems and versions as specified in Gemfile. lock to ensure your Jekyll site builds with no compatibility or dependency conflicts. For more information about how to use Bundler in your Jekyll project, this tutorial should provide answers to the most common questions and explain how to get up and running quickly. "
    }, {
    "id": 7,
    "url": "http://localhost:4000/no-bs-ml/we-all-wait-for-summer/",
    "title": "We all wait for summer",
    "body": "2018/01/12 - As I engage in the so-called “bull sessions” around and about the school, I too often find that most college men have a misconception of the purpose of education. Most of the “brethren” think that education should equip them with the proper instruments of exploitation so that they can forever trample over the masses. Still others think that education should furnish them with noble ends rather than means to an end. It seems to me that education has a two-fold function to perform in the life of man and in society: the one is utility and the other is culture. Education must enable a man to become more efficient, to achieve with increasing facility the ligitimate goals of his life. "
    }, {
    "id": 8,
    "url": "http://localhost:4000/no-bs-ml/tree-of-codes/",
    "title": "Tree of Codes",
    "body": "2018/01/12 - The first mass-produced book to deviate from a rectilinear format, at least in the United States, is thought to be this 1863 edition of Red Riding Hood, cut into the shape of the protagonist herself with the troublesome wolf curled at her feet. Produced by the Boston-based publisher Louis Prang, this is the first in their “Doll Series”, a set of five “die-cut” books, known also as shape books — the other titles being Robinson Crusoe, Goody Two-Shoes (also written by Red Riding Hood author Lydia Very), Cinderella, and King Winter. As for this particular rendition of Charles Perrault’s classic tale, the text and design is by Lydia Very (1823-1901), sister of Transcendentalist poet Jones Very. The gruesome ending of the original — which sees Little Red Riding Hood being gobbled up as well as her grandmother — is avoided here, the gore giving way to the less bloody aims of the morality tale, and the lesson that one should not disobey one’s mother.  It would seem the claim could also extend to die cut books in general, as we can’t find anything sooner, but do let us know in the comments if you have further light to shed on this! Such books are, of course, still popular in children’s publishing today, though the die cutting is not now limited to mere outlines, as evidenced in a beautiful 2014 version of the same Little Red Riding Hood story. An 1868 Prang catalogue would later claim that such “books in the shape of a regular paper Doll… originated with us”. The die cut has also been employed in the non-juvenile sphere as well, a recent example being Jonathan Safran Foer’s ambitious Tree of Codes. "
    }, {
    "id": 9,
    "url": "http://localhost:4000/no-bs-ml/red-riding/",
    "title": "Red Riding Hood",
    "body": "2018/01/12 - The first mass-produced book to deviate from a rectilinear format, at least in the United States, is thought to be this 1863 edition of Red Riding Hood, cut into the shape of the protagonist herself with the troublesome wolf curled at her feet. Produced by the Boston-based publisher Louis Prang, this is the first in their “Doll Series”, a set of five “die-cut” books, known also as shape books — the other titles being Robinson Crusoe, Goody Two-Shoes (also written by Red Riding Hood author Lydia Very), Cinderella, and King Winter. An 1868 Prang catalogue would later claim that such “books in the shape of a regular paper Doll… originated with us”.  It would seem the claim could also extend to die cut books in general, as we can’t find anything sooner, but do let us know in the comments if you have further light to shed on this! Such books are, of course, still popular in children’s publishing today, though the die cutting is not now limited to mere outlines, as evidenced in a beautiful 2014 version of the same Little Red Riding Hood story. The die cut has also been employed in the non-juvenile sphere as well, a recent example being Jonathan Safran Foer’s ambitious Tree of Codes. As for this particular rendition of Charles Perrault’s classic tale, the text and design is by Lydia Very (1823-1901), sister of Transcendentalist poet Jones Very. The gruesome ending of the original — which sees Little Red Riding Hood being gobbled up as well as her grandmother — is avoided here, the gore giving way to the less bloody aims of the morality tale, and the lesson that one should not disobey one’s mother. "
    }, {
    "id": 10,
    "url": "http://localhost:4000/no-bs-ml/press-and-education/",
    "title": "Press and education",
    "body": "2018/01/12 - Even the press, the classroom, the platform, and the pulpit in many instances do not give us objective and unbiased truths. To save man from the morass of propaganda, in my opinion, is one of the chief aims of education. Education must enable one to sift and weigh evidence, to discern the true from the false, the real from the unreal, and the facts from the fiction. Education must also train one for quick, resolute and effective thinking. To think incisively and to think for one’s self is very difficult.  We are prone to let our mental life become invaded by legions of half truths, prejudices, and propaganda. At this point, I often wonder whether or not education is fulfilling its purpose. A great majority of the so-called educated people do not think logically and scientifically. The function of education, therefore, is to teach one to think intensively and to think critically. But education which stops with efficiency may prove the greatest menace to society. The most dangerous criminal may be the man gifted with reason, but with no morals. The late Eugene Talmadge, in my opinion, possessed one of the better minds of Georgia, or even America. Moreover, he wore the Phi Beta Kappa key. By all measuring rods, Mr. Talmadge could think critically and intensively; yet he contends that I am an inferior being. Are those the types of men we call educated? We must remember that intelligence is not enough. Intelligence plus character–that is the goal of true education. The complete education gives one not only power of concentration, but worthy objectives upon which to concentrate. The broad education will, therefore, transmit to one not only the accumulated knowledge of the race but also the accumulated experience of social living. "
    }, {
    "id": 11,
    "url": "http://localhost:4000/no-bs-ml/customer-service/",
    "title": "Intro to Math for Data Science",
    "body": "2018/01/11 - Learning the theoretical background for data science or machine learning can be a daunting experience, as it involves multiple fields of mathematics, and a long list of online resources. Multivariable Calculus: 123456Determinant in space: det( -&gt; B, A, -&gt; C -&gt; )Triangle in space with vertices P = (1, 0, 0), Q = (0, 1, 0), R = (0, 0, 2), find angle at P:PQ PRcos θ = 1 , θ ≈ 71. 5◦. |−−→ PR | √2√5 √ PQ || 10"
    }];

var idx = lunr(function () {
    this.ref('id')
    this.field('title')
    this.field('body')

    documents.forEach(function (doc) {
        this.add(doc)
    }, this)
});
function lunr_search(term) {
    document.getElementById('lunrsearchresults').innerHTML = '<ul></ul>';
    if(term) {
        document.getElementById('lunrsearchresults').innerHTML = "<p>Search results for '" + term + "'</p>" + document.getElementById('lunrsearchresults').innerHTML;
        //put results on the screen.
        var results = idx.search(term);
        if(results.length>0){
            //console.log(idx.search(term));
            //if results
            for (var i = 0; i < results.length; i++) {
                // more statements
                var ref = results[i]['ref'];
                var url = documents[ref]['url'];
                var title = documents[ref]['title'];
                var body = documents[ref]['body'].substring(0,160)+'...';
                document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML + "<li class='lunrsearchresult'><a href='" + url + "'><span class='title'>" + title + "</span><br /><span class='body'>"+ body +"</span><br /><span class='url'>"+ url +"</span></a></li>";
            }
        } else {
            document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = "<li class='lunrsearchresult'>No results found...</li>";
        }
    }
    return false;
}

function lunr_search(term) {
    $('#lunrsearchresults').show( 400 );
    $( "body" ).addClass( "modal-open" );
    
    document.getElementById('lunrsearchresults').innerHTML = '<div id="resultsmodal" class="modal fade show d-block"  tabindex="-1" role="dialog" aria-labelledby="resultsmodal"> <div class="modal-dialog shadow-lg" role="document"> <div class="modal-content"> <div class="modal-header" id="modtit"> <button type="button" class="close" id="btnx" data-dismiss="modal" aria-label="Close"> &times; </button> </div> <div class="modal-body"> <ul class="mb-0"> </ul>    </div> <div class="modal-footer"><button id="btnx" type="button" class="btn btn-danger btn-sm" data-dismiss="modal">Close</button></div></div> </div></div>';
    if(term) {
        document.getElementById('modtit').innerHTML = "<h5 class='modal-title'>Search results for '" + term + "'</h5>" + document.getElementById('modtit').innerHTML;
        //put results on the screen.
        var results = idx.search(term);
        if(results.length>0){
            //console.log(idx.search(term));
            //if results
            for (var i = 0; i < results.length; i++) {
                // more statements
                var ref = results[i]['ref'];
                var url = documents[ref]['url'];
                var title = documents[ref]['title'];
                var body = documents[ref]['body'].substring(0,160)+'...';
                document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML + "<li class='lunrsearchresult'><a href='" + url + "'><span class='title'>" + title + "</span><br /><small><span class='body'>"+ body +"</span><br /><span class='url'>"+ url +"</span></small></a></li>";
            }
        } else {
            document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = "<li class='lunrsearchresult'>Sorry, no results found. Close & try a different search!</li>";
        }
    }
    return false;
}
    
$(function() {
    $("#lunrsearchresults").on('click', '#btnx', function () {
        $('#lunrsearchresults').hide( 5 );
        $( "body" ).removeClass( "modal-open" );
    });
});
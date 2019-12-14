### No BS ML Website
Site avail at: https://no-bs-ml.github.io/blog/

- Download or git clone git@github.com:No-BS-ML/blog.git
- cd blog
- bundle
- Edit _config.yml options. If your site is in root: baseurl: ''. Also, change your Google Analytics code, disqus username, authors, Mailchimp list etc.
- jekyll serve --watch
- Start by adding your .md files in _posts. 
- YAML front matter
- featured post - featured:true
- exclude featured post from “All stories” loop to avoid duplicated posts - hidden:true
- post image - image: assets/images/mypic.jpg
- external post image - image: "https://externalwebsite.com/image4.jpg"
- page comments - comments:true
- meta description (optional) - description: "this is my meta description"

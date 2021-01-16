Vue.component('activity-item', {
    props: ['activity'],
    template: `
            <article class="post" >
            <h4>{{activity.title}}</h4>
            <div class="media">
            <div class="media-left">
                <p class="image is-32x32">
                <img src="./images/user.png">
                </p>
            </div>
            <div class="media-content">
                <div class="content">
                <p>
                    <a href="#">Filip Jerga</a> {{activity.updatedAt}} &nbsp;
                </p>
                </div>
            </div>
            <div class="media-right">
                <span>Progress Bar Here</span>
            </div>
            </div>
        </article>
    `
})
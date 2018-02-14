$(function(){
    $row = $('#showUsers')
    $.get('/user/',function(data){
        $row.html('');
        console.log('i ran');
        console.log(data);
        data.forEach((element,index) => {
                if(element.trainerAlloted){
                
                
                $row.append(`<div class="six wide column" style="margin-bottom : 60px;">
                <div class="ui special cards">
                    <div class="ui fluid card">
                        <div class="blurring dimmable image">
                            <div class="ui dimmer">
                                <div class="content">
                                    <div class="ui grid centered">
                                        <div class="row">
                                            <div class="ten wide column" style="text-align:center;">
                                                <div class="ui green basic button">Update Call Status</div>
                                            </div>
                                        </div>

                                        <div class="row">
                                            <div class="ten wide column" style="text-align:center;">
                                                <div class="ui red basic button">Send Unable to Contact Email</div>
                                            </div>
                                        </div>

                                        <div class="row">
                                            <div class="ten wide column" style="text-align:center;">
                                                <div class="ui blue basic button">Chat</div>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="ten wide column" style="text-align:center;">
                                                <div class="ui teal basic button">Assign Category</div>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                            </div>
                            <div style="height: 350px; background-image: url(${element.imgUrl}); background-size: cover; background-position: center;">
                                <!-- <img src="image/elliot.jpg" > -->
                            </div>

                        </div>
                        <div class="content">
                            <a class="header">${element.name}</a>
                            <div class="meta">
                                <span class="date">Joined in Sep 2014</span>
                            </div>
                        </div>
                        <div class="extra content">
                            <p>
                                Female, ${element.age}
                                <br> Fitness + Nutrition
                                <br> Coach: 
                                <br> Phone: ${element.phoneNumber}
                            </p>
                        </div>
                    </div>
                </div>
            </div>`)
        }
            
        });
    })
})
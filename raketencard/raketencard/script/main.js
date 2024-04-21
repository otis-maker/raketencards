$(document).ready(function () {
    const wrapper = $('#wrapper');
    rocketData.forEach(rocket => {
        const card = $(`<div class="card">
       
            <div class="card-content">
            <div class="rocket-image" style="background-image: url('${rocket.image}');">
            <div class="card-title">${rocket.name}</div>
        </div>
                
                    

               
                <div class="goal-icon">${rocket.mission_goal}</div>
                <div class="rocket-info">${rocket.group} exploration</div>

                <div class="stat-icon">mission duration</div>
                <div class="stat-value">${rocket.mission_duration}</div>
                <div class="stat-icon">max speed</div>
                <div class="stat-value">${rocket.max_speed}</div>
                <div class="stat-icon">max earth distance</div>
                <div class="stat-value">${rocket.max_earth_distance}</div>
                <div class="stat-icon">development cost</div>
                <div class="stat-value">${rocket.development_cost}</div>
                <div class="stat-icon">weight</div>
                <div class="stat-value">${rocket.weight}</div>
                <div class="stat-icon">year build</div>
                <div class="stat-value">${rocket.year_built}</div>
            </div>
        </div>`);
        wrapper.append(card);
    });
});

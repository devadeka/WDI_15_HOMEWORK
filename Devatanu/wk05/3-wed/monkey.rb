class Monkey
    def initialize(name,species)
        @name = name
        @species = species
        @food_eaten = []
    end

    def introduce()
        puts "Hi my name is #{@name}. I am #{get_species_string()}. I had #{get_food_eaten_string()} for brunch"
    end

    def eat(food)
        @food_eaten.push(food)
    end

    private
    def get_species_string()
        if ['a','e','i','o','u'].include?(@species[0].downcase)
            return "an #{@species}"
        else
            return "a #{@species}"
        end
    end

    def get_food_eaten_string()
        return @food_eaten.join(', ').reverse.sub(',','& ').reverse.gsub('&','and')
    end

    
end
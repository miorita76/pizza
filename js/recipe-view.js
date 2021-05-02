// generate Recipe list
let recipesDefault = [
    {
        "name": "Quattro Stagioni",
        "image": "img/quattro.png",
        "ingredients": ["tomato sauce", "mozzarella", "mushrooms", "ham", "artichokes", "olives", "oregano"],
        "details": "- Quattro Stagioni Frozen dough (thawed) for 2 pizzas or 2 prepared crusts;\n- About 2 cups tomato sauce;\n- 1 cup shredded leftover cooked chicken;\n- 1 cup fresh basil, spinach, or other greens;\n- 8 ounces shredded mozzarella (2 cups);\n- 6 tablespoons olive oil;\n- Cornmeal.\n",
        "description": "1) Pizza 'Quattro Stagioni' Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\n2) Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.\n3) Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.\n4) Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus.\n5) Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna\n"
    },
    {
        "name": "Carbonara",
        "image": "img/carbonara.png",
        "ingredients": ["tomato sauce", "mozzarella", "parmesan", "eggs", "bacon"],
        "details": "- All-purpose flour and cornmeal;\n- 1 pound whole-wheat pizza dough, room temperature;\n- 1 tablespoon olive oil;\n- ⅛ teaspoon pepper;\n- 1 cup skim milk;\n- ¼ cup finely grated Parmesan;\n- ⅓ cup frozen peas, thawed;\n- 2 slices prosciutto, chopped or torn;\n",
        "description": "1) Pizza 'Carbonara' Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\n2) Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.\n3) Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.\n4) Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus.\n5) Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna\n"
    },
    {
        "name": "Crudo",
        "image": "img/crudo.png",
        "ingredients": ["tomato sauce", "mozzarella", "parma ham"],
        "details": "- Crudo Frozen dough (thawed) for 2 pizzas or 2 prepared crusts;\n- About 2 cups tomato sauce;\n- 1 cup shredded leftover cooked chicken;\n- 1 cup fresh basil, spinach, or other greens;\n- 8 ounces shredded mozzarella (2 cups);\n- 6 tablespoons olive oil;\n- Cornmeal.\n",
        "description": "1) Pizza 'Crudo' Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\n2) Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.\n3) Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.\n4) Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus.\n5) Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna\n"
    }/*,
    {
        "name": "Montanara",
        "image": "img/montanara.png",
        "ingredients": ["tomato sauce", "mozzarella", "mushrooms", "pepperoni", "Stracchino (soft cheese)"],
        "details": "- Montanara Frozen dough (thawed) for 2 pizzas or 2 prepared crusts;\n- About 2 cups tomato sauce;\n- 1 cup shredded leftover cooked chicken;\n- 1 cup fresh basil, spinach, or other greens;\n- 8 ounces shredded mozzarella (2 cups);\n- 6 tablespoons olive oil;\n- Cornmeal.\n",
        "description": "1) Pizza 'Montanara' Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\n2) Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.\n3) Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.\n4) Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus.\n5) Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna\n"
    },
    {
        "name": "Emiliana",
        "image": "img/emiliana.png",
        "ingredients": ["tomato sauce", "mozzarella", "eggplant", "boiled potatoes", "sausage"],
        "details": "- Emiliana Frozen dough (thawed) for 2 pizzas or 2 prepared crusts;\n- About 2 cups tomato sauce;\n- 1 cup shredded leftover cooked chicken;\n- 1 cup fresh basil, spinach, or other greens;\n- 8 ounces shredded mozzarella (2 cups);\n- 6 tablespoons olive oil;\n- Cornmeal.\n",
        "description": "1) Pizza 'Emiliana' Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\n2) Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.\n3) Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.\n4) Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus.\n5) Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna\n"
    },
    {
        "name": "Fattoria",
        "image": "img/fattoria.png",
        "ingredients": ["tomato sauce", "mozzarella", "peppers", "peas", "porchetta (Italian spit-roasted pork)"],
        "details": "- Fattoria Frozen dough (thawed) for 2 pizzas or 2 prepared crusts;\n- About 2 cups tomato sauce;\n- 1 cup shredded leftover cooked chicken;\n- 1 cup fresh basil, spinach, or other greens;\n- 8 ounces shredded mozzarella (2 cups);\n- 6 tablespoons olive oil;\n- Cornmeal.\n",
        "description": "1) Pizza 'Fattoria' Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\n2) Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.\n3) Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.\n4) Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus.\n5) Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna\n"
    },
    {
        "name": "Prosciutto or Cardinale",
        "image": "img/prosciutto.png",
        "ingredients": ["tomato sauce", "mozzarella", "ham", "oregano"],
        "details": "- Prosciutto or Cardinale Frozen dough (thawed) for 2 pizzas or 2 prepared crusts;\n- About 2 cups tomato sauce;\n- 1 cup shredded leftover cooked chicken;\n- 1 cup fresh basil, spinach, or other greens;\n- 8 ounces shredded mozzarella (2 cups);\n- 6 tablespoons olive oil;\n- Cornmeal.\n",
        "description": "1) Pizza 'Prosciutto or Cardinale' Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\n2) Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.\n3) Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.\n4) Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus.\n5) Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna\n"
    },
    {
        "name": "Prosciutto e Funghi",
        "image": "img/prosciutto_funghi.png",
        "ingredients": ["tomato sauce", "mozzarella", "ham", "mushrooms"],
        "details": "- Prosciutto e Funghi Frozen dough (thawed) for 2 pizzas or 2 prepared crusts;\n- About 2 cups tomato sauce;\n- 1 cup shredded leftover cooked chicken;\n- 1 cup fresh basil, spinach, or other greens;\n- 8 ounces shredded mozzarella (2 cups);\n- 6 tablespoons olive oil;\n- Cornmeal.\n",
        "description": "1) Pizza 'Prosciutto e Funghi' Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\n2) Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.\n3) Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.\n4) Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus.\n5) Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna\n"
    },
    {
        "name": "Sarda",
        "image": "img/sarda.png",
        "ingredients": ["tomato sauce", "mozzarella", "pecorino cheese", "spicy salami"],
        "details": "- Sarda Frozen dough (thawed) for 2 pizzas or 2 prepared crusts;\n- About 2 cups tomato sauce;\n- 1 cup shredded leftover cooked chicken;\n- 1 cup fresh basil, spinach, or other greens;\n- 8 ounces shredded mozzarella (2 cups);\n- 6 tablespoons olive oil;\n- Cornmeal.\n",
        "description": "1) Pizza 'Sarda' Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\n2) Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.\n3) Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.\n4) Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus.\n5) Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna\n"
    },
    {
        "name": "Diavola",
        "image": "img/diavola.png",
        "ingredients": ["tomato sauce", "mozzarella", "spicy salami", "chilli pepper"],
        "details": "- Diavola Frozen dough (thawed) for 2 pizzas or 2 prepared crusts;\n- About 2 cups tomato sauce;\n- 1 cup shredded leftover cooked chicken;\n- 1 cup fresh basil, spinach, or other greens;\n- 8 ounces shredded mozzarella (2 cups);\n- 6 tablespoons olive oil;\n- Cornmeal.\n",
        "description": "1) Pizza 'Diavola' Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\n2) Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.\n3) Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.\n4) Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus.\n5) Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna\n"
    },
    {
        "name": "Contadina",
        "image": "img/contadina.png",
        "ingredients": ["tomato sauce", "mozzarella", "asparagus", "mushrooms", "bacon", "parmesan"],
        "details": "- Contadina Frozen dough (thawed) for 2 pizzas or 2 prepared crusts;\n- About 2 cups tomato sauce;\n- 1 cup shredded leftover cooked chicken;\n- 1 cup fresh basil, spinach, or other greens;\n- 8 ounces shredded mozzarella (2 cups);\n- 6 tablespoons olive oil;\n- Cornmeal.\n",
        "description": "1) Pizza 'Contadina' Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\n2) Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.\n3) Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.\n4) Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus.\n5) Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna\n"
    },
    {
        "name": "Capricciosa",
        "image": "img/capricciosa.png",
        "ingredients": ["tomato sauce", "mozzarella", "ham", "artichokes", "mushrooms", "olives"],
        "details": "- 1 ball Ca' Momi Pizza Dough;\n- ¼ cup canned coarsely puréed or ground tomatoes;\n- ½ cup lightly packed coarsely shredded low-moisture mozzarella;\n- 2 ounces very thinly sliced prosciutto cotto (Italian-style uncured ham) or freshly sliced uncured boiled ham, torn into large shreds;\n- ½ cup Sautéed Mushrooms;\n- 3 ounces drained marinated artichokes, sliced into thin wedges.\n",
        "description": "1) pizza 'Capricciosa' Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\n2) Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.\n3) Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.\n4) Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus.\n5) Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna\n"
    },
    {
        "name": "Padana",
        "image": "img/padana.png",
        "ingredients": ["tomato sauce", "parmesan cheese", "salami", "zucchini", "polenta (boiled cornmeal)"],
        "details": "- Padana Frozen dough (thawed) for 2 pizzas or 2 prepared crusts;\n- About 2 cups tomato sauce;\n- 1 cup shredded leftover cooked chicken;\n- 1 cup fresh basil, spinach, or other greens;\n- 8 ounces shredded mozzarella (2 cups);\n- 6 tablespoons olive oil;\n- Cornmeal.\n",
        "description": "1) Pizza 'Padana' Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\n2) Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.\n3) Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.\n4) Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus.\n5) Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna\n"
    },
    {
        "name": "Tedesca",
        "image": "img/tedesca.png",
        "ingredients": ["tomato sauce", "mozzarella", "vienna sausage"],
        "details": "- Tedesca Frozen dough (thawed) for 2 pizzas or 2 prepared crusts;\n- About 2 cups tomato sauce;\n- 1 cup shredded leftover cooked chicken;\n- 1 cup fresh basil, spinach, or other greens;\n- 8 ounces shredded mozzarella (2 cups);\n- 6 tablespoons olive oil;\n- Cornmeal.\n",
        "description": "1) Pizza 'Tebesca' Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\n2) Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.\n3) Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.\n4) Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus.\n5) Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna\n"
    },
    {
        "name": "Tirolese",
        "image": "img/tirolese.png",
        "ingredients": ["tomato sauce", "mozzarella", "gorgonzola cheese", "speck"],
        "details": "- Tirolese Frozen dough (thawed) for 2 pizzas or 2 prepared crusts;\n- About 2 cups tomato sauce;\n- 1 cup shredded leftover cooked chicken;\n- 1 cup fresh basil, spinach, or other greens;\n- 8 ounces shredded mozzarella (2 cups);\n- 6 tablespoons olive oil;\n- Cornmeal.\n",
        "description": "1) Pizza 'Tirolese' Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\n2) Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.\n3) Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.\n4) Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus.\n5) Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna\n"
    },
    {
        "name": "Boscaiola",
        "image": "img/boscaiola.png",
        "ingredients": ["tomato sauce", "mozzarella", "porcino mushrooms", "bacon"],
        "details": "- Boscaiola Frozen dough (thawed) for 2 pizzas or 2 prepared crusts;\n- About 2 cups tomato sauce;\n- 1 cup shredded leftover cooked chicken;\n- 1 cup fresh basil, spinach, or other greens;\n- 8 ounces shredded mozzarella (2 cups);\n- 6 tablespoons olive oil;\n- Cornmeal.\n",
        "description": "1) Start with making the pizza dough. Proof the yeast in the 1/8 cup warm water and 1/4 tsp sugar.\n 2) Put flour and 3/4 tsp salt in a bowl. Add water, yeast mixture and 1 tsp olive oil and knead dough to a ball with nice elastic and smooth consistency. cover with damp cloth and leave to rise for 1-1,5 hours until dough has doubled in size.\n3) In the meantime, start preparing sauce and toppings. For the sauce, chop garlic and shallots very finely. Put approximately 3/4 of the mushrooms in a food processor and process to a puree.\n4) Slice remaining mushrooms and fry them in 1 tbs of olive oil until browned, set aside.\n5) Remove meat from sausage casing and fry in a frying pan until browned, working it with a wooden spoon to get nice small chunks of meat. Add fennel seeds the last 2 minutes. Set aside.\n6) In a frying pan, heat 1/2 tbs butter and 1/2 tbs olive oil on medium-low heat and cook shallots and garlic without browning them, just until the raw aroma dissapears. Add mushroom puree and cook until most of the moisture has evaporized and the mixture starts to darken in color.\n7) Add the wine, bring to a boil until alcohol has evaporized. Add chopped parsley, sage and vegetable stock and simmer until sauce has thickened. Season with salt and black pepper to taste.\n8) Preheat oven to 500 degrees F.\n9) Roll dough with rolling pin into a circle of about 12 inches and place onto pizza stone or baking tray. Bake the bare crust for 4 minutes. Remove from oven and coat with boscaiola sauce. Top with fried mushrooms, sausage and grated mozzarella. Bake another 6-8 minutes until edges are light brown and cheese has melted. Remove from oven, garnish with fresh parsley, a drizzle of olive oil and serve.\n"
    },
    {
        "name": "Francescana",
        "image": "img/francescana.png",
        "ingredients": ["tomato sauce", "mozzarella", "porcino mushrooms", "ham", "parmesan"],
        "details": "- Francescana Frozen dough (thawed) for 2 pizzas or 2 prepared crusts;\n- About 2 cups tomato sauce;\n- 1 cup shredded leftover cooked chicken;\n- 1 cup fresh basil, spinach, or other greens;\n- 8 ounces shredded mozzarella (2 cups);\n- 6 tablespoons olive oil;\n- Cornmeal.\n",
        "description": "1) Pizza 'Francescana' Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\n2) Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.\n3) Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.\n4) Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus.\n5) Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna\n"
    },
    {
        "name": "Valdostana",
        "image": "img/valdostana.png",
        "ingredients": ["tomato sauce", "mozzarella", "fontina cheese", "bacon"],
        "details": "- Valdostana Frozen dough (thawed) for 2 pizzas or 2 prepared crusts;\n- About 2 cups tomato sauce;\n- 1 cup shredded leftover cooked chicken;\n- 1 cup fresh basil, spinach, or other greens;\n- 8 ounces shredded mozzarella (2 cups);\n- 6 tablespoons olive oil;\n- Cornmeal.\n",
        "description": "1) Pizza 'Valdostana' Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\n2) Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.\n3) Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.\n4) Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus.\n5) Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna\n"
    },
    {
        "name": "Bismarck",
        "image": "img/bismarck.png",
        "ingredients": ["tomato sauce", "mozzarella", "ham", "fried egg"],
        "details": "- 2 Tbs. extra-virgin olive oil, plus more for brushing;\n- 1/4 lb. (125 g) cremini mushrooms, thinly sliced;\n- Kosher salt and freshly ground pepper;\n- 1/2 batch food-processor pizza dough;\n- 1/2 cup (4 fl. oz./125 ml) prepared pizza sauce or tomato sauce;\n- 1/2 cup (2 oz./60 g) grated mozzarella cheese;\n- 1/2 cup (2 oz./60 g) black olives, pitted and halved;\n- 1 jar (5 oz./155 g) marinated artichoke hearts, drained and quartered;\n- 1/4 lb. (125 g) thinly sliced prosciutto;\n- Grated Parmesan cheese for serving",
        "description": "1) Mix flour, water, salt, yeast, olive oil to make a dough.\n2) Put genovese sauce and cheese on the dough.\n3) Put papurika and an egg on top.\n4) Pizza Bismarck recipe step.\n5) Bake it in the oven at 300℃ for 15 minutes.\n6) Pizza Bismarck recipe step.\n7) Here we go! Buon appetito!\n"
    }*/
];

const DEFAULT_RECIPE_LENGTH = recipesDefault.length;

// sorting by name
recipesDefault.sort(function (a, b) {
    if (a.name > b.name) {
        return 1;
    }
    if (a.name < b.name) {
        return -1;
    }
    return 0;
});

// verify the existance of the client data
let recipesClient = [];

recipesClient = localStorage.getItem('recipes');
if (recipesClient) {
    recipesClient = JSON.parse(recipesClient);
    recipesClient.sort(function (a, b) {
        if (a.name > b.name) {
            return 1;
        }
        if (a.name < b.name) {
            return -1;
        }
        return 0;
    });
};

let recipesList = recipesDefault;
if (typeof recipesClient != "undefined" && recipesClient != null && recipesClient.length != null && recipesClient.length > 0) {
    recipesList = recipesDefault.concat(recipesClient);
};



class RecipesBoard {
    constructor(recipesArr, defaultArrLength, highlightArr) {
        this.recipesArr = recipesArr;
        this.defaultArrLength = defaultArrLength;
    }
    boardDraw() {
        let parent = document.querySelector("#recipe-board_list");

        for (let i in this.recipesArr) {
            var recipeLabel = document.createElement("LABEL");
            recipeLabel.setAttribute("class", "recipe-wrapper");
            /*
                       if ((this.highlightArr != null) && (typeof this.highlightArr != "undefined")) {
                           console.log('+++++ highlightArr +++++');
                           console.log('i= ', i);
                           console.log(this.highlightArr);
                           console.log('+++++ ========= +++++');
           
                           let k = 0;
                           do {
                               if (this.highlightArr[k] == this.recipesArr[i].name) {
                                   recipeLabel.setAttribute("class", "recipe-wrapper recipe-highlight");
                               };
                               k++;
                           } while (k < this.highlightArr.length);
           
           
                       };
           
                      
                       
                                   if (this.highlightArr !== null) {
                                       for (let k = 0; k < this.highlightArr.length; k++) {
                                           if (this.highlightArr[k] == this.recipesArr[i].name) {
                                               recipeLabel.setAttribute("class", "recipe-wrapper recipe-highlight");
                                           };
                                       };
                                   };
                       */
            if (i == this.defaultArrLength) {
                let lineHR = document.createElement("HR");
                lineHR.setAttribute("class", "ingredient-board_line");
                parent.appendChild(lineHR);

                let headerName = document.createElement("HEADER");
                headerName.setAttribute("class", "ingredient-board_header");
                headerName.textContent = "My recipes board";
                parent.appendChild(headerName);

                lineHR = document.createElement("HR");
                lineHR.setAttribute("class", "ingredient-board_line");
                parent.appendChild(lineHR);
            };

            let radioInput = document.createElement("INPUT");
            radioInput.setAttribute("type", "radio");
            radioInput.setAttribute("name", "recipe_item");
            radioInput.setAttribute("value", this.recipesArr[i].name);
            radioInput.setAttribute("onclick", "displayRecipeValue()");
            recipeLabel.appendChild(radioInput);

            let recipeCheckmark = document.createElement("SPAN");
            recipeCheckmark.setAttribute("class", "recipe-checkmark");
            recipeLabel.appendChild(recipeCheckmark);

            let recipeTitle = document.createElement("SPAN");
            recipeTitle.setAttribute("class", "recipe-label_title");

            let titleText = document.createTextNode(this.recipesArr[i].name);
            recipeTitle.appendChild(titleText);
            recipeLabel.appendChild(recipeTitle);

            parent.appendChild(recipeLabel);
        };
    }
};

let recipes = new RecipesBoard(recipesList, DEFAULT_RECIPE_LENGTH);
recipes.boardDraw();

let selectedRecipeIndex;

function displayRecipeValue() {
    let recipeSelected = document.getElementsByName('recipe_item');

    for (i = 0; i < recipeSelected.length; i++) {
        if (recipeSelected[i].checked) {
            // The Dashboard Recipe display
            if (i > DEFAULT_RECIPE_LENGTH - 1) {
                document.getElementById("recipe-buttons_manage").classList.remove("visually-hidden");
            }
            else {
                document.getElementById("recipe-buttons_manage").classList.add("visually-hidden");
            };

            document.querySelector('.recipe-display_title').textContent = 'pizza "' + recipesList[i].name + '"';
            document.querySelector('.recipe-display_img').src = recipesList[i].image;
            document.querySelector('.recipe-display_details').textContent = recipesList[i].details;
            document.querySelector('.recipe-display_description').textContent = recipesList[i].description;

            // console.log(recipeSelected[i].value + ' i= ' + i);
            selectedRecipeIndex = i;
            // console.log('selectedRecipeIndex= ' + selectedRecipeIndex);
        };
    };

    document.getElementById("recipe-modify").classList.add("visually-hidden");
    document.getElementById("recipe-add").classList.add("visually-hidden");
    document.getElementById("recipe-scaffolding").style.display = "block";
    document.getElementById("recipe-display").classList.remove("visually-hidden");
    document.getElementById("main-board").classList.add("visually-hidden");
};

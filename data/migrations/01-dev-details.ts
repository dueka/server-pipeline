import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('candidates', table => {
        table.increments();
        table.string("avatar_url");
        table.string("bio");
        table.string("blog");
        table.string("company");
        table.string("email");
        table.string("followers");
        table.string("following");
        table.string("hireable");
        table.string("location");
        table.string("name");
        table.string("public_repos");
        table.string("followers_url");
        table.string("following_url");
        table.string("repos_url");
        table.string("url");
        table.string("login");
        table.string("type");
        table.string("organizations");
        table.string("following_list");
        table.string("follower_list");
        table.string("country");
        table.string("stack");
        table.string("city");
        table.string("geo_location");
        table.string("latitudes");
        table.string("longitudes");
        table.string("address");
        table.string("geometry");
        table.string("crs");
        table.string("real_url");
        table.string("public_identifier");
        table.string("full_name");
        table.string("occupation");
        table.string("headline");
        table.string("experiences");
        table.string("education");
        table.string("languages");
        table.string("certifications");
        table.string("connections");
        table.string("similarly_named_profiles");
        table.string("articles");
        table.string("groups");
        table.string("git_id");
    })
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTableIfExists("candidates")
}


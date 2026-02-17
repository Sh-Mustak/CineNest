export default function MovieCard() {
  return (
    <div className="flex gap-8 overflow-x-auto hide-scrollbar pb-8 snap-x pt-6 scroll-pl-6 pl-6">
      {/* <!-- Movie Card 1 --> */}
      <div className="flex-none w-56 group cursor-pointer snap-start">
        <div className="relative aspect-[2/3] rounded-xl overflow-hidden mb-3 transition-all duration-300 group-hover:scale-105 group-hover:shadow-[0_0_30px_rgba(230,10,13,0.3)]">
          <img
            alt="Dune"
            className="w-full h-full object-cover"
            data-alt="Cinematic movie poster of a desert planet"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBgzPODX0W5B-cVV5jK4tMFyVILx27VKGblp-eijjo_DUk1PM5uDOnCEEE9lCoaEcFxwvsepWryWGc9kv8Ll8I84dpcXScGcwJOEHm3_VTevikNxJaVKJyKilYjkBDaY1UVJpxOk9Q2EPdplgAU0LbQGxsTfMNojyT0Nm81X05A4wGb8VCDq4I0HlY--6YDL9Q3og43AqHQotLde4ntCF-PM51MHC6jBep4Js0YhpgSuxQMYOGDSeAt66JyBdxABgeJf8f3B3VhQz9e"
          />
          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
            <div className="bg-primary p-3 rounded-full text-white shadow-lg">
              <span className="material-symbols-outlined fill-current">
                play_arrow
              </span>
            </div>
            <div className="bg-white/20 backdrop-blur-md p-3 rounded-full text-white">
              <span className="material-symbols-outlined">add</span>
            </div>
          </div>
          <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-md px-2 py-1 rounded-lg text-[10px] font-bold text-yellow-400 flex items-center gap-1">
            <span className="material-symbols-outlined text-[12px] fill-current">
              star
            </span>
            9.2
          </div>
        </div>
        <h3 className="text-white font-bold group-hover:text-primary transition-colors">
          Dune: Part Two
        </h3>
        <p className="text-slate-500 text-xs font-medium uppercase tracking-wider">
          Sci-Fi • 2024
        </p>
      </div>
      {/* <!-- Movie Card 2 --> */}
      <div className="flex-none w-56 group cursor-pointer snap-start">
        <div className="relative aspect-[2/3] rounded-xl overflow-hidden mb-3 transition-all duration-300 group-hover:scale-105 group-hover:shadow-[0_0_30px_rgba(230,10,13,0.3)]">
          <img
            alt="Batman"
            className="w-full h-full object-cover"
            data-alt="Dark moody movie poster featuring a superhero silhouette"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCK8BPqTf_0W_7G-8DEeY4n20LoZsTp-dmIqPewo8YiUBCjkNyPgXFZ0HOaAGcIW6ywVSuiHTx9EMh2ySvRqqjPcsLI7qE83-HFgP7E1fESihsfZIYg5EI7AGnPP5yTbc_qhWwlH1KhN90rL9PmuXyiVL9syUKvIOYr-ukN5OS9qQQ_bZdROR_P8Rvvu2vLUYmrOe5RpBRlJo1IfJpWZSTA0QQAUf1XuyN8PLK_Ng_14Kr0uUYonkW7FIsasg9HouMPPNGTSJ_GC8o4"
          />
          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
            <div className="bg-primary p-3 rounded-full text-white shadow-lg">
              <span className="material-symbols-outlined fill-current">
                play_arrow
              </span>
            </div>
          </div>
          <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-md px-2 py-1 rounded-lg text-[10px] font-bold text-yellow-400 flex items-center gap-1">
            <span className="material-symbols-outlined text-[12px] fill-current">
              star
            </span>
            8.8
          </div>
        </div>
        <h3 className="text-white font-bold group-hover:text-primary transition-colors">
          The Batman
        </h3>
        <p className="text-slate-500 text-xs font-medium uppercase tracking-wider">
          Action • 2022
        </p>
      </div>
      {/* <!-- Movie Card 3 --> */}
      <div className="flex-none w-56 group cursor-pointer snap-start">
        <div className="relative aspect-[2/3] rounded-xl overflow-hidden mb-3 transition-all duration-300 group-hover:scale-105 group-hover:shadow-[0_0_30px_rgba(230,10,13,0.3)]">
          <img
            alt="Oppenheimer"
            className="w-full h-full object-cover"
            data-alt="Dramatic movie poster with fire and explosion themes"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDfuLLZ8dVXFQ7_GvF8zmleugFVOZSmjfoXwmr9B-kvJ40rbK6yL1nw5dwxwHV00cwfUxxgs7VgDo1Lyotoxlt7BK23GMLLArIxcgIiw-wLchJ6t-6JEn5fvzuyQ6ZBqyO-eQXDVjD2YDzKECB46QJg8w05t7TmWxVfpYijIhpp_VFmz3ZtDLi91RUX4kFSMQmTQI57vWv49s-8SQsN4QOrAIJ1uVKyZJja5kynKCSEvoMsFFEWeKuWEAmlvIPagApeYE4fsXKn-Bso"
          />
          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
            <div className="bg-primary p-3 rounded-full text-white shadow-lg">
              <span className="material-symbols-outlined fill-current">
                play_arrow
              </span>
            </div>
          </div>
          <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-md px-2 py-1 rounded-lg text-[10px] font-bold text-yellow-400 flex items-center gap-1">
            <span className="material-symbols-outlined text-[12px] fill-current">
              star
            </span>
            9.5
          </div>
        </div>
        <h3 className="text-white font-bold group-hover:text-primary transition-colors">
          Oppenheimer
        </h3>
        <p className="text-slate-500 text-xs font-medium uppercase tracking-wider">
          History • 2023
        </p>
      </div>
      {/* <!-- Movie Card 4 --> */}
      <div className="flex-none w-56 group cursor-pointer snap-start">
        <div className="relative aspect-[2/3] rounded-xl overflow-hidden mb-3 transition-all duration-300 group-hover:scale-105 group-hover:shadow-[0_0_30px_rgba(230,10,13,0.3)]">
          <img
            alt="Blade Runner"
            className="w-full h-full object-cover"
            data-alt="Neon futuristic cyberpunk movie poster"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDpNPm0t7nUhwrV_fK5zKUnKaVa-MkC6WqXtxQILwkAarpP7bB-yQFmTfC37V1eGlKlA-Zfx6p5UKT9oe69R_1SNdSzZU7CnifqvYp6062FiWzt_2sLQc-dz3PIKJEWqFYfer12URQtqxVNHAHq1So_5JUvmiY9IknzqBXNQ90-qyaEfCcgx9_la0U01d7Shzg6FQeWzlptYbQu1SPds9Q-GDJgMbV-Nkh9jYjQ8ulOwq2kgFGkecZOhFW-n_kNOuvHHcf5xxlHBkyz"
          />
          <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-md px-2 py-1 rounded-lg text-[10px] font-bold text-yellow-400 flex items-center gap-1">
            <span className="material-symbols-outlined text-[12px] fill-current">
              star
            </span>
            9.0
          </div>
        </div>
        <h3 className="text-white font-bold group-hover:text-primary transition-colors">
          Blade Runner 2049
        </h3>
        <p className="text-slate-500 text-xs font-medium uppercase tracking-wider">
          Sci-Fi • 2017
        </p>
      </div>
      {/* <!-- Movie Card 5 --> */}
      <div className="flex-none w-56 group cursor-pointer snap-start">
        <div className="relative aspect-[2/3] rounded-xl overflow-hidden mb-3 transition-all duration-300 group-hover:scale-105 group-hover:shadow-[0_0_30px_rgba(230,10,13,0.3)]">
          <img
            alt="The Matrix"
            className="w-full h-full object-cover"
            data-alt="Digital green rain and code movie poster"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDWceYtpBeAbdVKJugocOvTyYF6N7NRpFEh9P55LTminl7vM2_zTdGS8qfE9lOdPCVj3EK5rtPBrNJ-mm96LpdPvGenF0HRQ33SJ6bNvBHDj54LQ79ueMd8lpltjUavlsivgAY_s-MDrfMiRIrHd89R7UDtnQXY_Ymb4tdAWfT3gESBz-eyD2CowkmaZ4wHyqlV-3j7ua-onz6K0Cka3rbUTNYjtcyhPhPe6SPEn0QAL9HExTlSvgb_VzJv2NN2qP3TL_J85ItfCZ4a"
          />
          <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-md px-2 py-1 rounded-lg text-[10px] font-bold text-yellow-400 flex items-center gap-1">
            <span className="material-symbols-outlined text-[12px] fill-current">
              star
            </span>
            8.7
          </div>
        </div>
        <h3 className="text-white font-bold group-hover:text-primary transition-colors">
          The Matrix
        </h3>
        <p className="text-slate-500 text-xs font-medium uppercase tracking-wider">
          Action • 1999
        </p>
      </div>
      {/* <!-- Movie Card 6 --> */}
      <div className="flex-none w-56 group cursor-pointer snap-start">
        <div className="relative aspect-[2/3] rounded-xl overflow-hidden mb-3 transition-all duration-300 group-hover:scale-105 group-hover:shadow-[0_0_30px_rgba(230,10,13,0.3)]">
          <img
            alt="Gladiator"
            className="w-full h-full object-cover"
            data-alt="Ancient Roman arena movie poster"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuC0eTftY8ZBqRy5I1jBgAzFTF2GSJjRkZ7mI_Ta51w5afD5aRngGP7vUaxCfjhU1WU7wHjViBseH4-2iD-dXbBjuGRvWF4NqFRAIZ5ze_kjqYgwzHRPfIGMbtNslea5FAWgf-P5s9Z8J6kX7K42edYk4tIdHesECEjMwzr3esR9WasRu9bHSDT-PDP5ayySg_fcV7oKY9dWdN9-1RCRVreBLpjZZV_FU9JEm-1e4ogky6vmc50EbAgYfQGcBfY7XrWDcVdxDVNcKfJO"
          />
          <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-md px-2 py-1 rounded-lg text-[10px] font-bold text-yellow-400 flex items-center gap-1">
            <span className="material-symbols-outlined text-[12px] fill-current">
              star
            </span>
            8.9
          </div>
        </div>
        <h3 className="text-white font-bold group-hover:text-primary transition-colors">
          Gladiator
        </h3>
        <p className="text-slate-500 text-xs font-medium uppercase tracking-wider">
          Drama • 2000
        </p>
      </div>
    </div>
  );
}

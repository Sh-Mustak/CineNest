export default function CastDetails() {
  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-sm uppercase tracking-widest text-white/40 font-bold mb-4">
          Top Cast
        </h3>
        <div className="space-y-4">
          <div className="flex items-center gap-4">
            <div
              className="size-10 rounded-full bg-cover bg-center"
              data-alt="Headshot of actor 1"
              style={{
                backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuBZt9aFi13UWZwPuYphXA30XFn19iZY0ggPqXseXrjUxEFgjjZzDp6e5bCZ3D-SpK92NjGkNoysLFo15-zEE2VxHGQH5ecUI_MO1qKdmIZD70C-_kcU-96EVxbuThTcKR6yAtziDCp_mOdJCUGbLvy3841vxOoXepq1DRh3E6HoCa8IpjRESAUo_JmM3JvaUeWUMCsjHsnc4ctuCUoRC2tWJzvy_EypwJ9f3q-pTBofrNKLaoVjXeEqq8w9j3JZBWguBsRGUhASrMD4")`,
              }}
            ></div>
            <div>
              <p className="font-bold text-sm">Elena Rodriguez</p>
              <p className="text-xs text-white/50">Captain Sarah Chen</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div
              className="size-10 rounded-full bg-cover bg-center"
              data-alt="Headshot of actor 2"
              style={{
                backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuDGjowcboSby5yJ-zq8xA4ftrBIcX7USL0X_pviUvykB1hDZzBHYtk5b6HRMIKPKUu3zifPITiL54n_CQnwdBMkLqZOITrzfPKWo-YJ3doJWy67OU2fBxLTsiFgk_IWyvkJcaAuifJDq4cLolflA7eQ7T-dI64hjRnQg2a8vrwkmSyOSrBmuJ6tWAJTDBceNoYYYXPzSnw_VzPVfWDJNGqlM32yZfLicbMjWKZYWHsW3VbWW6yp1f85_rQ0vc4wChuVK4fy3f4JYNyk")`,
              }}
            ></div>
            <div>
              <p className="font-bold text-sm">Marcus Thorne</p>
              <p className="text-xs text-white/50">Officer Kaelen</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div
              className="size-10 rounded-full bg-cover bg-center"
              data-alt="Headshot of actor 3"
              style={{
                backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuAUGt9JFSetVNM3O2mv5yrtK3_Io0Afmcj2N-KLxOn8iewcdPD0t-uSOydpWMY5nr_2hMkLHdFC2QESjt7ZInmHiDUCSCOokOu-Ndlbb_cRJe6U_k8hMV-5Q0O3E1HXkmD-OYGJtoRjdyie-Gcn_I_35hbRxegUoBxTAijq7W7nPW6o6xSCWi7ZymGJpPWUXawjuqLJyWNB1QbfhRzi3VkjJMuhqP_6WCcji68-O3xfaPyC-EpBljVcpp71sIvPqhS5dUupUN0TsJcw")`,
              }}
            ></div>
            <div>
              <p className="font-bold text-sm">Aria Vance</p>
              <p className="text-xs text-white/50">The Echo (Voice)</p>
            </div>
          </div>
        </div>
      </div>
      <div className="p-4 bg-surface-dark/30 rounded-xl border border-white/5">
        <p className="text-xs text-white/40 uppercase font-bold mb-2">
          Director
        </p>
        <p className="font-bold text-sm mb-4">Christopher Nolan</p>
        <p className="text-xs text-white/40 uppercase font-bold mb-2">Studio</p>
        <p className="font-bold text-sm">Nebula Pictures</p>
      </div>
    </div>
  );
}

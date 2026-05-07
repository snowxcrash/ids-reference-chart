const rows = [
  {
    ids: ['global_quantities', ],
    description: [
      {
        ids: ['global_quantities/', 'current_halo_pol(:)', ],
        description: ['current_halo_pol', ],
      },
      {
        ids: ['global_quantities/', 'current_halo_phi(:)', ],
        description: ['current_halo_phi', ],
      },
      {
        ids: ['global_quantities/', 'power_ohm(:)', ],
        description: ['power_ohm', ],
      },
      {
        ids: ['global_quantities/', 'power_ohm_halo(:)', ],
        description: ['power_ohm_halo', ],
      },
      {
        ids: ['global_quantities/', 'power_parallel_halo(:)', ],
        description: ['power_parallel_halo', ],
      },
      {
        ids: ['global_quantities/', 'power_radiated_electrons_impurities(:)', ],
        description: ['power_radiated_electrons_impurities', ],
      },
      {
        ids: ['global_quantities/', 'power_radiated_electrons_impurities_halo(:)', ],
        description: ['power_radiated_electrons_impurities_halo', ],
      },
      {
        ids: ['global_quantities/', 'energy_ohm(:)', ],
        description: ['energy_ohm', ],
      },
      {
        ids: ['global_quantities/', 'energy_ohm_halo(:)', ],
        description: ['energy_ohm_halo', ],
      },
      {
        ids: ['global_quantities/', 'energy_parallel_halo(:)', ],
        description: ['energy_parallel_halo', ],
      },
      {
        ids: ['global_quantities/', 'energy_radiated_electrons_impurities(:)', ],
        description: ['energy_radiated_electrons_impurities', ],
      },
      {
        ids: ['global_quantities/', 'energy_radiated_electrons_impurities_halo(:)', ],
        description: ['energy_radiated_electrons_impurities_halo', ],
      },
      {
        ids: ['global_quantities/', 'psi_halo_boundary(:)', ],
        description: ['psi_halo_boundary', ],
      },
    ],
  },
  {
    ids: ['profiles_1d(itime)', ],
    description: [
      {
        ids: ['profiles_1d(itime)/', 'grid', ],
        description: [
          {
            ids: ['profiles_1d(itime)/', 'grid/', 'rho_tor_norm(:)', ],
            description: ['rho_tor_norm(FLT_1D)', ],
          },
          {
            ids: ['profiles_1d(itime)/', 'grid/', 'rho_tor(:)', ],
            description: ['rho_tor(FLT_1D)', ],
          },
          {
            ids: ['profiles_1d(itime)/', 'grid/', 'rho_pol_norm(:)', ],
            description: ['rho_pol_norm(FLT_1D)', ],
          },
          {
            ids: ['profiles_1d(itime)/', 'grid/', 'psi(:)', ],
            description: ['psi(FLT_1D)', ],
          },
          {
            ids: ['profiles_1d(itime)/', 'grid/', 'volume(:)', ],
            description: ['volume(FLT_1D)', ],
          },
          {
            ids: ['profiles_1d(itime)/', 'grid/', 'area(:)', ],
            description: ['area(FLT_1D)', ],
          },
          {
            ids: ['profiles_1d(itime)/', 'grid/', 'surface(:)', ],
            description: ['surface(FLT_1D)', ],
          },
          {
            ids: ['profiles_1d(itime)/', 'grid/', 'psi_magnetic_axis', ],
            description: ['psi_magnetic_axis', ],
          },
          {
            ids: ['profiles_1d(itime)/', 'grid/', 'psi_boundary', ],
            description: ['psi_boundary', ],
          },
        ],
      },
      {
        ids: ['profiles_1d(itime)/', 'j_runaways(:)', ],
        description: ['j_runaways(FLT_1D)', ],
      },
      {
        ids: ['profiles_1d(itime)/', 'power_density_conductive_losses(:)', ],
        description: ['power_density_conductive_losses(FLT_1D)', ],
      },
      {
        ids: ['profiles_1d(itime)/', 'power_density_radiative_losses(:)', ],
        description: ['power_density_radiative_losses(FLT_1D)', ],
      },
    ],
  },
  {
    ids: ['vacuum_toroidal_field', ],
    description: [
      {
        ids: ['vacuum_toroidal_field/', 'r0', ],
        description: ['r0', ],
      },
      {
        ids: ['vacuum_toroidal_field/', 'b0(:)', ],
        description: ['b0', ],
      },
    ],
  },
  {
    ids: ['time(:)', ],
    description: ['time', ],
  },
]

export default rows

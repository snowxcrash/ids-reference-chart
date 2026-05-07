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
        ids: ['profiles_1d(itime)/', 'time', ],
        description: ['time', ],
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
